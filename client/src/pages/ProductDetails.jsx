import { useParams } from 'react-router-dom';
import { productDetailsFetcher } from '../lib';
import { useEffect, useState } from 'react';
import { Accordion, LoadingSpinner, ErrorMessage } from '../components';

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

  const { name, price, imageUrl, description } = product;

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
        'We offer free shipping on all orders over $50. For orders under $50, a flat shipping fee of $5 will be applied. All orders are shipped within 1-3 business days, and delivery usually takes 3-5 business days within the continental United States.',
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
            <div className="card-wrapper mx-8">
              <div className="img-wrapper w-full">
                <img className="w-full" src={imageUrl} alt="name" />
              </div>
              <div className="card-body flex flex-col items-center justify-center">
                <h4 className="card-name m-2 p-2 text-xl">{name}</h4>
                <p className="card-price m-2 text-lg font-bold">{`$${Number(
                  price
                ).toFixed(2)}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-two">
          <Accordion accordionTopics={accordionTopics} />
        </div>
        <div className="row-two">
          <div className="col-one flex w-full flex-col items-center justify-center"></div>
        </div>
      </div>
    </>
  );
}
