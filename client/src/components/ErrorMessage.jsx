export function ErrorMessage(error) {
  return (
    <div className="flex items-center justify-center">
      <p className="text-xl">Error Loading Products: {error}</p>
    </div>
  );
}
