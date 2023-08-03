import { RotatingBanner, LoadingSpinner } from '../components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
        <div className="row-one">
          <div className="col-one mb-8 mt-24 w-full">
            <h2 className="text-center text-3xl md:text-6xl">
              FEATURED STREETWEAR BRANDS
            </h2>
          </div>
        </div>
        <div className="row-two group relative bg-gray-200">
          <RotatingBanner />
        </div>
        <div className="row-three">
          <div className="col-one mb-8 w-full md:mb-16">
            <div className="img-wrapper relative w-full">
              <img
                className="w-full"
                src="/images/turtledoves.jpg"
                alt="turtledoves"
              />
              <Link to="/products">
                <h2 className="absolute left-[50%] top-[50%] z-0 -translate-x-1/2 -translate-y-1/2 rounded bg-red-600 p-2 text-center text-3xl text-black md:text-6xl">
                  SHOP NOW
                </h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="row-four">
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
