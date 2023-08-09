import { RotatingBanner, LoadingSpinner } from '../components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/images/supreme-carousel.jpg',
    },
    {
      src: '/images/palace-carousel.png',
    },
    {
      src: '/images/nike-carousel.png',
    },
    {
      src: '/images/mj-carousel.jpg',
    },
    {
      src: '/images/bape-carousel.png',
    },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="home-container w-full ">
        <div className="row-one group relative">
          <div
            className="absolute inset-0 bg-cover blur-md"
            style={{ backgroundImage: `url(${images[currentIndex].src})` }}
          />
          <RotatingBanner
            images={images}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div className="row-two">
          <div className="col-one mb-8 w-full md:mb-16">
            <div className="img-wrapper relative w-full">
              <img
                className="w-full"
                src="/images/turtledoves.jpg"
                alt="turtledoves"
              />
              <Link to="/products">
                <h2 className="absolute left-[50%] top-[50%] z-0 -translate-x-1/2 -translate-y-1/2 rounded bg-white p-2 text-center text-3xl text-black transition duration-200 ease-in-out md:text-6xl md:hover:bg-red-600">
                  SHOP NOW
                </h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="row-three">
          <div className="col-one mb-8 flex w-full flex-col justify-center md:mb-16 md:flex-row md:flex-wrap">
            <div className="img-wrapper w-full md:w-2/5">
              <img
                className="w-full"
                src="/images/insidestore.jpg"
                alt="insidestore"
              />
            </div>
            <div className="flex w-full flex-col items-center md:w-2/5">
              <h2 className="mt-8 text-center text-3xl md:mt-0">ABOUT US</h2>
              <p className="mt-4 w-full px-4 text-justify text-xl md:text-2xl">
                Welcome to HYPE, the epicenter of streetwear greatness.
                Established in May 2023 in San Diego, California, we specialize
                in offering the rarest and most exclusive footwear and clothing.
                With global locations, we curate a premium collection that sets
                the standard in the streetwear world. Our knowledgeable crew is
                dedicated to providing an exceptional shopping experience,
                connecting you to the culture and helping you discover your
                ideal fit. From our in-house brand to a wealth of industry
                expertise, we stand as the ultimate destination for streetwear
                enthusiasts worldwide. Step into the hype and embrace the
                lifestyle at HYPE!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
