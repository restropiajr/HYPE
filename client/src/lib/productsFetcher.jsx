export async function productsFetcher() {
  const res = await fetch('/api/products');
  const result = await res.json();
  if (!res.ok)
    throw new Error(
      `Fetch Error: ${result.error} (Status Code: ${res.status})`
    );
  return result;
}
