import { RotatingBanner } from '../components';
import { Link } from 'react-router-dom';

const images = [
  {
    src: '/images/supreme-carousel.jpg',
    alt: 'supreme',
  },
  {
    src: '/images/palace-carousel.png',
    alt: 'palace',
  },
  {
    src: '/images/jordansupreme-carousel.jpg',
    alt: 'jordan',
  },
  {
    src: '/images/stussy-carousel.png',
    alt: 'stussy',
  },
  {
    src: '/images/mj-carousel.jpg',
    alt: 'mj',
  },
];

export function Home() {
  return (
    <>
      <div className="home-container w-full">
        <h2 className="text-3xl mt-24 mb-8 md:mb-16 text-center">
          FEATURED STREETWEAR BRANDS
        </h2>
        <RotatingBanner images={images} />
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
        <div className="flex justify-center">
          <Link to="/catalog">
            <h2 className="text-3xl text-center cursor-pointer mb-8 md:mb-16 p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
              SHOP NOW
            </h2>
          </Link>
        </div>
        <div className="w-full flex flex-col justify-center mb-8 md:mb-16">
          <div className="w-full img-wrapper">
            <img
              className="w-full"
              src="/images/insidestore.jpg"
              alt="insidestore"
            />
          </div>
          <div className="w-full flex flex-col">
            <h2 className="text-3xl mt-8 md:mt-16 text-center">ABOUT US</h2>
            <p className="w-full text-lg md:text-xl px-4 text-justify mt-4">
              Welcome to <span className="font-bold text-md">HYPE</span>, the
              epicenter of streetwear greatness. Established in December 2006 in
              San Diego, California, we're all about bringing you the rarest and
              most exclusive footwear and clothing. With locations across the
              globe, we curate a premium collection that sets the standard in
              the streetwear world. Our knowledgeable crew is here to provide
              you with an ideal shopping experience, connecting you to the
              culture and helping you find your perfect fit. From our in-house
              brand to over combined 50 years of industry expertise, we're the
              ultimate destination for streetwear enthusiasts worldwide. Step
              into the hype and embrace the lifestyle at HYPE!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
