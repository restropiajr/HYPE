export async function cartFetcher(token) {
  const req = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const res = await fetch(`/api/mycart/load-cart`, req);
  const result = await res.json();
  if (!res.ok) throw new Error(result.error);
  return result;
}
