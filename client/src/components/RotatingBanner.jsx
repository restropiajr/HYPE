import { useEffect, useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

export function RotatingBanner({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [currentIndex, images.length]);

  return (
    <div className="col-one m-auto mb-8 mt-24 flex w-5/6 flex-col items-center justify-center md:mb-16">
      <Banner image={images[currentIndex]} />
      <PrevButton
        onPrev={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
      />
      <NextButton
        onNext={() => setCurrentIndex((currentIndex + 1) % images.length)}
      />
      <Indicators
        count={images.length}
        currentIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
      />
    </div>
  );
}

function Banner({ image }) {
  return (
    <div
      style={{ backgroundImage: `url(${image.src})` }}
      className="relative z-0 h-[200px] w-full bg-cover bg-center duration-500 md:h-[900px]"></div>
  );
}

function Indicators({ count, currentIndex, onSelect }) {
  const indicators = [];
  for (let index = 0; index < count; index++) {
    indicators.push(
      <button
        key={index}
        type="button"
        onClick={() => onSelect(index)}
        className="mx-1">
        {index === currentIndex ? (
          <BsCircleFill size={10} color="red" />
        ) : (
          <BsCircleFill size={10} color="black" />
        )}
      </button>
    );
  }
  return <div className="absolute bottom-[1%] flex">{indicators}</div>;
}

function NextButton({ onNext }) {
  return (
    <button
      onClick={() => onNext()}
      className="absolute right-[1%] top-[42.5%] rounded transition duration-200 ease-in-out md:right-[3.5%] md:p-2 md:hover:bg-red-600">
      <FaAngleRight size={20} color="black" />
    </button>
  );
}

function PrevButton({ onPrev }) {
  return (
    <button
      onClick={() => onPrev()}
      className="absolute left-[1%] top-[42.5%] rounded transition duration-200 ease-in-out md:left-[3.5%] md:p-2 md:hover:bg-red-600">
      <FaAngleLeft size={20} color="black" />
    </button>
  );
}
