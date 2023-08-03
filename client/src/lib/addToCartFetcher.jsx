export async function addToCartFetcher(event, cartId, token, productId) {
  const formData = new FormData(event.target);
  const cartData = Object.fromEntries(formData.entries());
  const { size, quantity } = cartData;
  const cart = { size, quantity, cartId, productId };
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
  if (!res.ok)
    throw new Error(
      `Fetch Error: ${result.error} (Status Code: ${res.status})`
    );
  console.log(result);
}
