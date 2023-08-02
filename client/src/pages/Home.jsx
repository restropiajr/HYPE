import { RotatingBanner, LoadingSpinner } from '../components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const images = [
  {
    src: '/images/supreme-carousel.jpg',
  },
  {
    src: '/images/palace-carousel.png',
  },
  {
    src: '/images/jordansupreme-carousel.jpg',
  },
  {
    src: '/images/stussy-carousel.png',
  },
  {
    src: '/images/mj-carousel.jpg',
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

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
        <div className="row-one group relative bg-gray-200">
          <RotatingBanner images={images} />
        </div>
        <div className="row-two">
          <div className="col-one mb-8 md:mb-16">
            <h2 className="text-center text-4xl md:text-6xl">
              FEATURED BRANDS
            </h2>
          </div>
        </div>
        <div className="row-three">
          <div className="col-one mb-8 flex w-full justify-center md:mb-16">
            <div className="img-wrapper w-full md:w-1/3">
              <img
                className="w-full"
                src="/images/waverunners.jpg"
                alt="waverunners"
              />
            </div>
          </div>
        </div>
        <div className="row-four">
          <Link to="/products">
            <div className="col-one mb-8 flex justify-center md:mb-16">
              <h2 className="rounded p-2 text-center text-4xl transition duration-200 ease-in-out md:text-6xl md:hover:bg-red-600">
                SHOP NOW
              </h2>
            </div>
          </Link>
        </div>
        <div className="row-five">
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
              <p className="mt-4 w-full px-4 text-justify text-lg md:text-xl">
                Welcome to HYPE, the epicenter of streetwear greatness.
                Established in May 2023 in San Diego, California, we're all
                about bringing you the rarest and most exclusive footwear and
                clothing. With locations across the globe, we curate a premium
                collection that sets the standard in the streetwear world. Our
                knowledgeable crew is here to provide you with an ideal shopping
                experience, connecting you to the culture and helping you find
                your perfect fit. From our in-house brand to over combined 50
                years of industry expertise, we're the ultimate destination for
                streetwear enthusiasts worldwide. Step into the hype and embrace
                the lifestyle at HYPE!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
