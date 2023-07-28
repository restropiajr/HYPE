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
        <h2 className="text-3xl md:text-5xl mt-36 mb-16 text-center">
          FEATURED STREETWEAR BRANDS
        </h2>
        <RotatingBanner images={images} />
        <div className="w-full flex justify-evenly items-center">
          <div className="img-wrapper w-2/5">
            <img
              className="w-full"
              src="/images/waverunners.jpg"
              alt="waverunners"
            />
          </div>
          <div className="img-wrapper w-2/5">
            <img
              className="w-full"
              src="/images/turtledoves.jpg"
              alt="turtledoves"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/catalog">
            <h2 className="text-3xl md:text-5xl mt-6 text-center cursor-pointer mb-14 p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
              SHOP NOW
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}
