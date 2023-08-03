// import { useEffect, useState, useContext } from 'react';
// import { AppContext, cartFetcher } from '../lib';
// import { useNavigate } from 'react-router-dom';
// import { LoadingSpinner, ErrorMessage } from '../components';

// export function MyCart() {
//   const [cart, setCart] = useState();
//   const { user, token } = useContext(AppContext);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) navigate('/login');
//     async function loadCart() {
//       try {
//         const loadedCart = await cartFetcher(token);
//         setCart(loadedCart);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     setIsLoading(true);
//     loadCart();
//   }, [user, navigate, token]);

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   if (error) {
//     return <ErrorMessage error={error} />;
//   }

//   return (
//     <>
//       <div className="myCart-container w-full">
//         <div className="row-one">
//           <div className="col-one mb-8 mt-24 flex w-full flex-col items-center justify-center">
//             <h2 className="text-3xl">MY CART</h2>
//           </div>
//         </div>
//         <div className="row-two">
//           {cart.map((product) => {
//             return (
//               <div key={product.productId} className="col flex w-full md:w-1/4">
//                 <CartedProduct product={product} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// function CartedProduct({ product }) {
//   const { name, price, imageUrl, size, quantity } = product;

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       setIsLoading(true);
//       await updateQuantityFetcher(event, token, productId);
//       updatedQuantity(true);
//       setQuantityError(null);
//     } catch (error) {
//       setQuantityError(error);
//       setAddedToCart(false);
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
