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
        <RotatingBanner images={images} />
        <div className="home-row flex">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="img-wrapper md:w-1/2">
              <img
                className="w-full"
                src="/images/waverunners.jpg"
                alt="waverunners"
              />
            </div>
            <Link to="catalog">
              <h2 className="text-3xl mt-6 text-center cursor-pointer mb-14 p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                SHOP NOW
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
