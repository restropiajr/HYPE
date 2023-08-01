import { RotatingBanner } from '../components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Vortex } from 'react-loader-spinner';

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
    return (
      <div className="fixed inset-0 bottom-[30%] flex items-center justify-center">
        <Vortex
          visible={true}
          height="150"
          width="150"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'black', 'red', 'black', 'red', 'black']}
        />
      </div>
    );
  }

  return (
    <>
      <div className="home-container w-full ">
        <div className="row-one group relative bg-gray-200">
          <RotatingBanner images={images} />
        </div>
        <div className="row-two">
          <h2 className="mb-8 text-center text-3xl md:mb-16">
            FEATURED STREETWEAR BRANDS
          </h2>
        </div>
        <div className="row-three">
          <div className="mb-6 flex w-full items-center justify-evenly md:mb-14">
            <div className="img-wrapper mx-2 w-1/2 md:mx-0 md:w-2/5">
              <img
                className="w-full"
                src="/images/waverunners.jpg"
                alt="waverunners"
              />
            </div>
            <div className="img-wrapper mx-2 w-1/2 md:mx-0 md:w-2/5">
              <img
                className="w-full"
                src="/images/turtledoves.jpg"
                alt="turtledoves"
              />
            </div>
          </div>
        </div>
        <div className="row-four">
          <div className="flex justify-center">
            <Link to="/products">
              <h2 className="mb-8 cursor-pointer rounded p-2 text-center text-3xl transition duration-200 ease-in-out md:mb-16 md:hover:bg-red-600">
                SHOP NOW
              </h2>
            </Link>
          </div>
        </div>
        <div className="row-five">
          <div className="mb-8 flex w-full flex-col justify-center md:mb-16">
            <div className="img-wrapper w-full">
              <img
                className="w-full"
                src="/images/insidestore.jpg"
                alt="insidestore"
              />
            </div>
            <div className="flex w-full flex-col items-center">
              <h2 className="mt-8 text-center text-3xl md:mt-16">ABOUT US</h2>
              <p className="mt-4 w-full px-4 text-justify text-lg md:w-2/3 md:text-xl">
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
