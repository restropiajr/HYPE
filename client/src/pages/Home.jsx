import { RotatingBanner } from '../components';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <div className="home-container w-full ">
        <div className="row-one bg-gray-200 relative group">
          <RotatingBanner images={images} />
        </div>
        <div className="row-two">
          <h2 className="text-3xl mb-8 md:mb-16 text-center">
            FEATURED STREETWEAR BRANDS
          </h2>
        </div>
        <div className="row-three">
          <div className="w-full flex justify-evenly items-center mb-6 md:mb-14">
            <div className="img-wrapper w-1/2 mx-2 md:mx-0 md:w-2/5">
              <img
                className="w-full"
                src="/images/waverunners.jpg"
                alt="waverunners"
              />
            </div>
            <div className="img-wrapper w-1/2 mx-2 md:mx-0 md:w-2/5">
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
              <h2 className="text-3xl text-center cursor-pointer mb-8 md:mb-16 p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                SHOP NOW
              </h2>
            </Link>
          </div>
        </div>
        <div className="row-five">
          <div className="w-full flex flex-col justify-center mb-8 md:mb-16">
            <div className="w-full img-wrapper">
              <img
                className="w-full"
                src="/images/insidestore.jpg"
                alt="insidestore"
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <h2 className="text-3xl mt-8 md:mt-16 text-center">ABOUT US</h2>
              <p className="w-full md:w-2/3 text-lg md:text-xl px-4 text-justify mt-4">
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
