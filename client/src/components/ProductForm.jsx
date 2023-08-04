import { useNavigate } from 'react-router-dom';

export function ProductForm({
  category,
  quantityError,
  addedToCart,
  handleSubmit,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-one flex w-full flex-col items-center justify-center">
        <h4 className="card-name m-2 text-xl">SIZE</h4>
        <form
          className="flex w-full flex-col items-center justify-center"
          onSubmit={handleSubmit}>
          {category === 'top' || category === 'bottom' ? (
            <select
              disabled={addedToCart || quantityError}
              required
              name="size"
              className={`w-3/4 rounded border-2 border-black text-center text-xs font-bold  md:w-1/6 ${
                addedToCart || quantityError
                  ? 'transition-none'
                  : 'cursor-pointer transition duration-200 ease-in-out md:hover:bg-red-600'
              }`}>
              <option value="">--CHOOSE A SIZE--</option>
              <option value="EXTRA SMALL">EXTRA SMALL</option>
              <option value="SMALL">SMALL</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="LARGE">LARGE</option>
              <option value="EXTRA LARGE">EXTRA LARGE</option>
            </select>
          ) : category === 'shoe' ? (
            <select
              disabled={addedToCart || quantityError}
              required
              name="size"
              className={`w-3/4 rounded border-2 border-black text-center text-xs font-bold  md:w-1/6 ${
                addedToCart || quantityError
                  ? 'transition-none'
                  : 'cursor-pointer transition duration-200 ease-in-out md:hover:bg-red-600'
              }`}>
              <option value="">--CHOOSE A SIZE--</option>
              <option value="US(M) 8 / US(W) 9.5">US(M) 8 / US(W) 9.5</option>
              <option value="US(M) 9 / US(W) 10.5">US(M) 9 / US(W) 10.5</option>
              <option value="US(M) 10 / US(W) 11.5">
                US(M) 10 / US(W) 11.5
              </option>
              <option value="US(M) 11 / US(W) 12.5">
                US(M) 11 / US(W) 12.5
              </option>
              <option value="US(M) 12 / US(W) 13.5">
                US(M) 12 / US(W) 13.5
              </option>
            </select>
          ) : category === 'accessory' ? (
            <select
              disabled={addedToCart || quantityError}
              required
              name="size"
              className={`w-3/4 rounded border-2 border-black text-center text-xs font-bold  md:w-1/6 ${
                addedToCart || quantityError
                  ? 'transition-none'
                  : 'cursor-pointer transition duration-200 ease-in-out md:hover:bg-red-600'
              }`}>
              <option value="">--CHOOSE A SIZE--</option>
              <option value="ONE">ONE SIZE</option>
            </select>
          ) : null}
          <h4 className="card-name m-2 text-xl">QUANTITY</h4>
          <select
            disabled={addedToCart || quantityError}
            required
            name="quantity"
            className={`w-3/4 rounded border-2 border-black text-center text-xs font-bold  md:w-1/6 ${
              addedToCart || quantityError
                ? 'transition-none'
                : 'cursor-pointer transition duration-200 ease-in-out md:hover:bg-red-600'
            }`}>
            <option value="">--CHOOSE QUANTITY--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {addedToCart || quantityError ? (
            <button
              onClick={() => navigate('/mycart')}
              type="button"
              className="mb-8 mt-4 block w-3/4 rounded border-2 border-black bg-red-600 p-2 text-xl md:w-1/6">
              GO TO CART
            </button>
          ) : (
            <button
              type="submit"
              className="mb-8 mt-4 block w-3/4 rounded border-2 border-black p-2 text-xl transition duration-200 ease-in-out md:w-1/6 md:hover:bg-red-600">
              ADD TO CART
            </button>
          )}
        </form>
        {addedToCart && (
          <p className="mb-8 p-2 text-xl font-bold">ADDED TO CART</p>
        )}
        {quantityError && (
          <p className="mb-8 p-2 text-xl font-bold">{quantityError.message}</p>
        )}
      </div>
    </>
  );
}
