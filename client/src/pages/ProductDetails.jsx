import { useParams, Link } from 'react-router-dom';
import { productDetailsFetcher } from '../lib';
import { useEffect, useState } from 'react';
import { Accordion, LoadingSpinner, ErrorMessage } from '../components';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function ProductDetails() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function loadProduct() {
      try {
        const loadedProduct = await productDetailsFetcher(productId);
        setProduct(loadedProduct);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadProduct();
  }, [productId]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const { name, price, imageUrl, description, category } = product;

  const accordionTopics = [
    {
      id: 1,
      topic: 'DESCRIPTION',
      description: description,
    },
    {
      id: 2,
      topic: 'SHIPPING',
      description:
        'We offer free shipping on all orders. All orders are shipped within 1-3 business days, and delivery usually takes 3-5 business days within the continental United States.',
    },
    {
      id: 3,
      topic: 'RETURNS',
      description:
        'If you are not completely satisfied with your purchase, you may return it within 30 days of receiving your order for a full refund. Please ensure that the item is unused and in its original packaging. To initiate a return, please contact our customer support team, and they will provide you with a return label. Once we receive the returned item, we will process your refund within 3-5 business days.',
    },
  ];

  return (
    <>
      <div className="product-details-container w-full">
        <div className="row-one">
          <div className="col-one mt-24 flex w-full flex-col items-center justify-center">
            <Link
              to="/products"
              className="flex cursor-pointer items-center justify-center rounded p-2 transition duration-200 ease-in-out md:mb-16 md:hover:bg-red-600">
              <FaArrowLeftLong size={30} color={'black'} />
              <p className="p-2 text-center text-xl font-bold">
                BACK TO PRODUCTS
              </p>
            </Link>
            <div className="card-wrapper mx-8 md:flex md:flex-col md:items-center">
              <div className="img-wrapper w-full md:w-3/4">
                <img className="w-full" src={imageUrl} alt="name" />
              </div>
              <div className="card-body flex flex-col items-center justify-center">
                <h4 className="card-name p-2 text-xl">{name}</h4>
                <p className="card-price mb-2 text-lg font-bold">{`$${Number(
                  price
                ).toFixed(2)}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-two">
          <Accordion accordionTopics={accordionTopics} />
        </div>
        <div className="row-three">
          <div className="col-one flex w-full flex-col items-center justify-center">
            <h4 className="card-name m-2 text-xl">SIZE</h4>
            <form className="flex w-full flex-col items-center justify-center">
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
              <button
                disabled={isLoading}
                type="submit"
                className="mb-8 mt-4 block w-3/4 rounded border-2 border-black p-2 text-xl transition duration-200 ease-in-out md:w-1/6 md:hover:bg-red-600">
                ADD TO CART
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
