export async function checkOutFetcher(token) {
  const req = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  const res = await fetch(`/api/mycart/check-out-cart`, req);
  const result = await res.json();
  console.log(result);
  if (!res.ok) {
    throw new Error(result.error);
  }
  return result;
}
