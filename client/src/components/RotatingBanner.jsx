import { useEffect, useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';

export function RotatingBanner({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [currentIndex, images.length]);

  return (
    <div className="rotatingbanner-container w-5/6 flex flex-col m-auto justify-center items-center mt-24 mb-8 md:mb-16">
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
      className="z-0 w-full h-[200px] md:h-[900px] bg-cover bg-center relative duration-500"></div>
  );
}

function Indicators({ count, currentIndex, onSelect }) {
  function renderIndicator() {
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
    return indicators;
  }
  return (
    <div className="flex absolute bottom-[1%] right-auto">
      {renderIndicator()}
    </div>
  );
}

function NextButton({ onNext }) {
  return (
    <button
      onClick={() => onNext()}
      className="absolute top-[42.5%] right-[1%] md:right-[3.5%]">
      <FaAngleRight size={25} color="red" />
    </button>
  );
}

function PrevButton({ onPrev }) {
  return (
    <button
      onClick={() => onPrev()}
      className="absolute top-[42.5%] left-[1%] md:left-[3.5%]">
      <FaAngleLeft size={25} color="red" />
    </button>
  );
}
