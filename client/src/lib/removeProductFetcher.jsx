export async function removeProductFetcher(token, productId, size) {
  const cart = { productId, size };
  const req = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  };
  const res = await fetch(`/api/mycart/remove-product`, req);
  if (!res.ok) {
    const result = await res.json();
    throw new Error(result.error);
  }
}
