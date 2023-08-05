export async function signUpFetcher(event) {
  const formData = new FormData(event.target);
  const userData = Object.fromEntries(formData.entries());
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  };
  const res = await fetch('/api/auth/sign-up', req);
  const result = await res.json();
  if (!res.ok) throw new Error(result.error);
  return result;
}
