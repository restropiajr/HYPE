export function ErrorMessage({ error }) {
  return (
    <div className="mx-4 mt-24 flex items-center justify-center">
      <p className="text-center text-xl">ERROR: {error.message}</p>
    </div>
  );
}
