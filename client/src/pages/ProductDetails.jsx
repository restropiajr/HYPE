import { useParams, Link, useNavigate } from 'react-router-dom';
import { productDetailsFetcher, AppContext, addToCartFetcher } from '../lib';
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
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const [productError, setProductError] = useState();
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantityError, setQuantityError] = useState();
  const { user, token } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProduct() {
      try {
        const loadedProduct = await productDetailsFetcher(productId);
        setProduct(loadedProduct);
      } catch (error) {
        setProductError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadProduct();
  }, [productId]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!user) navigate('/login');
    try {
      const { cartId } = user;
      setIsLoading(true);
      await addToCartFetcher(event, cartId, token, productId);
      setAddedToCart(true);
      setQuantityError(null);
    } catch (error) {
      setQuantityError(error);
      setAddedToCart(false);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (productError) {
    return <ErrorMessage error={productError} />;
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
          <ProductForm
            category={category}
            quantityError={quantityError}
            addedToCart={addedToCart}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}
