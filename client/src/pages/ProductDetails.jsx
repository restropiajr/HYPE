import { Link, useParams } from 'react-router-dom';
import { productDetailsFetcher, ShoppingCartContext } from '../lib';
import { useEffect, useState, useContext } from 'react';
import {
  Accordion,
  LoadingSpinner,
  ErrorMessage,
  ProductForm,
} from '../components';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { setAddToCartError, isCartLoading } = useContext(ShoppingCartContext);

  useEffect(() => {
    async function loadProduct() {
      try {
        setIsLoading(true);
        const loadedProduct = await productDetailsFetcher(productId);
        setProduct(loadedProduct);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setAddToCartError(null);
    loadProduct();
  }, [productId, setAddToCartError]);

  if (isLoading || isCartLoading) {
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
              <div className="img-wrapper w-full md:w-1/2">
                <img className="w-full" src={imageUrl} alt="name" />
              </div>
              <div className="card-body flex flex-col items-center justify-center">
                <h4 className="card-name m-2 text-xl">{name}</h4>
                <p className="card-price mb-2 text-lg font-bold">{`$${Number(
                  price
                ).toFixed(2)}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-two">
          <h4 className="m-2 text-center text-xl text-red-600">
            MAXIMUM LIMIT OF 5 ITEMS PER ORDER
          </h4>
          <Accordion accordionTopics={accordionTopics} />
        </div>
        <div className="row-three">
          <ProductForm category={category} productId={productId} />
        </div>
      </div>
    </>
  );
}
