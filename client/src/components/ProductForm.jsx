export function ProductForm({ category, isLoading, handleSubmit }) {
  return (
    <>
      <div className="col-one flex w-full flex-col items-center justify-center">
        <h4 className="card-name m-2 text-xl">SIZE</h4>
        <form
          className="flex w-full flex-col items-center justify-center"
          onSubmit={handleSubmit}>
          {category === 'top' || category === 'bottom' ? (
            <select
              required
              name="size"
              className="w-3/4 cursor-pointer rounded border-2 border-black text-center text-xs font-bold transition duration-200 ease-in-out md:w-1/6 md:hover:bg-red-600">
              <option value="">--CHOOSE A SIZE--</option>
              <option value="xs">EXTRA SMALL</option>
              <option value="sm">SMALL</option>
              <option value="md">MEDIUM</option>
              <option value="lg">LARGE</option>
              <option value="xl">EXTRA LARGE</option>
            </select>
          ) : category === 'shoe' ? (
            <select
              required
              name="size"
              className="w-3/4 cursor-pointer rounded border-2 border-black text-center text-xs font-bold transition duration-200 ease-in-out md:w-1/6 md:hover:bg-red-600">
              <option value="">--CHOOSE A SIZE--</option>
              <option value="usm8-usw9.5">US(M) 8 / US(W) 9.5</option>
              <option value="usm9-usw10.5">US(M) 9 / US(W) 10.5</option>
              <option value="usm10-usw11.5">US(M) 10 / US(W) 11.5</option>
              <option value="usm11-usw12.5">US(M) 11 / US(W) 12.5</option>
              <option value="usm12-usw13.5">US(M) 12 / US(W) 13.5</option>
            </select>
          ) : category === 'accessory' ? (
            <select
              required
              name="size"
              className="w-3/4 cursor-pointer rounded border-2 border-black text-center text-xs font-bold transition duration-200 ease-in-out md:w-1/6 md:hover:bg-red-600">
              <option value="">--CHOOSE A SIZE--</option>
              <option value="one">ONE SIZE</option>
            </select>
          ) : null}
          <h4 className="card-name m-2 text-xl">QUANTITY</h4>
          <select
            required
            name="size"
            className="w-3/4 cursor-pointer rounded border-2 border-black text-center text-xs font-bold transition duration-200 ease-in-out md:w-1/6 md:hover:bg-red-600">
            <option value="">--CHOOSE QUANTITY--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            disabled={isLoading}
            type="submit"
            className="mb-8 mt-4 block w-3/4 rounded border-2 border-black p-2 text-xl transition duration-200 ease-in-out md:w-1/6 md:hover:bg-red-600">
            ADD TO CART
          </button>
        </form>
      </div>
    </>
  );
}
