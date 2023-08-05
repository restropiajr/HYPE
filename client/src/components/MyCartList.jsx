import { ShoppingCartContext } from '../lib';
import { useContext } from 'react';
import { FaXmark } from 'react-icons/fa6';

export function MyCartList() {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <div className="row-three flex flex-wrap">
      {cart.map((product) => {
        return (
          <div key={product.productId} className="col flex w-full md:w-1/4">
            <CartedProduct product={product} />
          </div>
        );
      })}
    </div>
  );
}

function CartedProduct({ product }) {
  const { productId, name, price, imageUrl, size, quantity } = product;
  const { handleUpdateQuantity, handleRemoveProduct } =
    useContext(ShoppingCartContext);

  return (
    <div className="card-wrapper group relative m-8">
      <div className="img-wrapper w-full">
        <img className="w-full" src={imageUrl} alt="name" />
      </div>
      <div className="card-body flex flex-col items-center justify-center">
        <h4 className="card-name rounded p-2 text-xl">{name}</h4>
        <p className="card-price pb-2 text-lg font-bold">{`$${Number(
          price
        ).toFixed(2)}`}</p>
        <p className="card-price pb-2 text-lg font-bold">{`SIZE: ${size}`}</p>
        <p className="card-price pb-2 text-lg font-bold">{`QUANTITY: ${quantity}`}</p>
        <form
          onSubmit={(event) => handleUpdateQuantity(event, productId, size)}>
          <select
            required
            name="quantity"
            className="w-full cursor-pointer rounded border-2 border-black text-center text-xs font-bold transition duration-200 ease-in-out md:hover:bg-red-600">
            <option value="">--UPDATE QUANTITY--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            type="submit"
            className="mb-8 mt-4 block w-full rounded border-2 border-black p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
            UPDATE
          </button>
        </form>
      </div>
      <button
        onClick={() => handleRemoveProduct(productId, size)}
        type="button"
        className="absolute right-0 top-0 flex cursor-pointer items-center justify-center rounded border-black p-2 transition duration-200 ease-in-out md:hover:bg-red-600">
        <FaXmark size={30} />
      </button>
    </div>
  );
}
