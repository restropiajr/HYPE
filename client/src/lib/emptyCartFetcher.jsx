export async function emptyCartFetcher(token) {
  const req = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const res = await fetch(`/api/mycart/empty-cart`, req);
  if (!res.ok) {
    const result = await res.json();
    throw new Error(result.error);
  }
}
