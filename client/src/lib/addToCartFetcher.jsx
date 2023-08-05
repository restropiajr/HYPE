export async function addToCartFetcher(event, token, productId) {
  const formData = new FormData(event.target);
  const cartData = Object.fromEntries(formData.entries());
  const { size, quantity } = cartData;
  const cart = { size, quantity, productId };
  const req = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  };
  const res = await fetch('/api/mycart/add-to-cart', req);
  const result = await res.json();
  if (!res.ok) throw new Error(result.error);
  return result;
}
