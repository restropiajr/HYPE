export async function updateQuantityFetcher(event, token, productId, size) {
  const formData = new FormData(event.target);
  const cartData = Object.fromEntries(formData.entries());
  const { quantity } = cartData;
  const cart = { size, quantity, productId };
  console.log(cart);
  const req = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  };
  const res = await fetch('/api/mycart/update-quantity', req);
  console.log(res);
  if (!res.ok) {
    const result = await res.json();
    throw new Error(result.error);
  }
}
