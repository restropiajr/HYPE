import { useContext } from 'react';
import { ShoppingCartContext } from '../lib';

export function ProductForm({ category, productId }) {
  const { handleAddToCart, addToCartError } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="col-one flex w-full flex-col items-center justify-center">
        <h4 className="card-name m-2 text-xl">SIZE</h4>
        <form
          className="flex w-full flex-col items-center justify-center"
          onSubmit={(event) => handleAddToCart(event, productId)}>
          {category === 'top' || category === 'bottom' ? (
            <select
              required
              name="size"
              className="w-1/2 cursor-pointer rounded border-2 border-black text-center text-xs transition duration-200 ease-in-out md:w-1/3 md:hover:bg-red-600 lg:w-1/6">
              <option value="">--CHOOSE A SIZE--</option>
              <option value="EXTRA SMALL">EXTRA SMALL</option>
              <option value="SMALL">SMALL</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="LARGE">LARGE</option>
              <option value="EXTRA LARGE">EXTRA LARGE</option>
            </select>
          ) : category === 'shoe' ? (
            <select
              required
              name="size"
              className="w-1/2 cursor-pointer rounded border-2 border-black text-center text-xs transition duration-200 ease-in-out md:w-1/3 md:hover:bg-red-600 lg:w-1/6">
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
              required
              name="size"
              className="w-1/2 cursor-pointer rounded border-2 border-black text-center text-xs transition duration-200 ease-in-out md:w-1/3 md:hover:bg-red-600 lg:w-1/6">
              <option value="">--CHOOSE A SIZE--</option>
              <option value="ONE">ONE</option>
            </select>
          ) : null}
          <h4 className="card-name m-2 text-xl">QUANTITY</h4>
          <select
            required
            name="quantity"
            className="w-1/2 cursor-pointer rounded border-2 border-black text-center text-xs transition duration-200 ease-in-out md:w-1/3 md:hover:bg-red-600 lg:w-1/6">
            <option value="">--CHOOSE QUANTITY--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            type="submit"
            className={` ${
              addToCartError ? 'mb-0' : 'mb-8'
            } mt-4 w-1/2 rounded border-2 border-black p-2 text-xl transition duration-200 ease-in-out md:w-1/3 md:hover:bg-red-600 lg:w-1/6`}>
            ADD TO CART
          </button>
        </form>
        {addToCartError && (
          <div className="flex w-full items-center justify-center md:w-1/2 lg:w-1/4">
            <p className="mx-8 mb-8 mt-2 text-start text-xl text-red-600 md:mx-0">
              ERROR: {addToCartError.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
