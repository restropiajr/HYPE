import { RotatingBanner } from '../components';

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
    src: '/images/mj-carousel.jpg',
    alt: 'mj',
  },
  {
    src: '/images/yeezy-carousel.jpg',
    alt: 'yeezy',
  },
];

export function Home() {
  return <RotatingBanner images={images} />;
}
