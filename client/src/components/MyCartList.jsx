// import { AppContext } from "../lib";
// import { useContext } from "react";

// export function MyCartList({cart}) {
//   return (
//     <div className="row-three flex flex-wrap">
//       {cart.map((product) => {
//         return (
//           <div key={product.productId} className="col flex w-full md:w-1/4">
//             <CartedProduct product={product} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// function CartedProduct({ product }) {
//   const { productId, name, price, imageUrl, size, quantity } = product;
//   const {token} = useContext(AppContext);
//   const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
//   const [updateError, setUpdateError] = useState();

//   async function handleSubmit(event, productId, setUpdatedQuantity) {
//     event.preventDefault();
//     try {
//       setIsLoading(true);
//       await updatedQuantityFetcher(event, token, productId);
//       setUpdatedQuantity();
//     } catch (error) {
//       setUpdateError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="card-wrapper group m-8">
//       <div className="img-wrapper w-full">
//         <img className="w-full" src={imageUrl} alt="name" />
//       </div>
//       <div className="card-body flex flex-col items-center justify-center">
//         <h4 className="card-name rounded p-2 text-xl">{name}</h4>
//         <p className="card-price pb-2 text-lg font-bold">{`$${Number(
//           price
//         ).toFixed(2)}`}</p>
//         <p className="card-price pb-2 text-lg font-bold">{`SIZE: ${size}`}</p>
//         <p className="card-price pb-2 text-lg font-bold">{`QUANTITY: ${quantity}`}</p>
//         <form onSubmit={handleSubmit}>
//           <select
//             required
//             name="quantity"
//             className="w-full cursor-pointer rounded border-2 border-black text-center text-xs font-bold transition duration-200 ease-in-out md:w-1/6 md:hover:bg-red-600">
//             <option value="">--UPDATE QUANTITY--</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//           <button
//             type="submit"
//             className="mb-8 mt-4 block w-full rounded border-2 border-black p-2 text-xl transition duration-200 ease-in-out md:w-1/6 md:hover:bg-red-600">
//             UPDATE
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
