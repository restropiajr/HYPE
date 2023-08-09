import { useEffect } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';

export function RotatingBanner({ currentIndex, setCurrentIndex, images }) {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [currentIndex, images.length, setCurrentIndex]);

  return (
    <div className="col-one m-auto mb-8 mt-24 flex w-3/4 flex-col items-center justify-center md:mb-16">
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
      className="relative z-0 h-[300px] w-full bg-cover bg-center duration-500 md:h-[750px]"></div>
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
  return (
    <div className="absolute bottom-[0%] left-[50%] z-0 -translate-x-1/2">
      {indicators}
    </div>
  );
}

function NextButton({ onNext }) {
  return (
    <button
      onClick={() => onNext()}
      className="absolute left-[95%] top-[50%] z-0 -translate-x-1/2 -translate-y-1/2 rounded transition duration-200 ease-in-out md:p-2 md:hover:bg-white">
      <FaAngleRight size={30} color="red" />
    </button>
  );
}

function PrevButton({ onPrev }) {
  return (
    <button
      onClick={() => onPrev()}
      className="absolute right-[95%] top-[50%] z-0 -translate-y-1/2 translate-x-1/2 rounded transition duration-200 ease-in-out md:p-2 md:hover:bg-white">
      <FaAngleLeft size={30} color="red" />
    </button>
  );
}
