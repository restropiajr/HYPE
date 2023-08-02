export async function productDetailsFetcher(productId) {
  const res = await fetch(`/api/product/details/${productId}`);
  const result = await res.json();
  if (!res.ok)
    throw new Error(
      `Fetch Error: ${result.error} (Status Code: ${res.status})`
    );
  return result;
}
