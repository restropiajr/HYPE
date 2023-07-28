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
    <div className="rotatingbanner-container flex flex-col md:w-1/2 m-auto justify-center items-center relative group mb-16">
      <Banner image={images[currentIndex]} />
      <PrevButton
        onPrev={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
      />
      <Indicators
        count={images.length}
        currentIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
      />
      <NextButton
        onNext={() => setCurrentIndex((currentIndex + 1) % images.length)}
      />
    </div>
  );
}

function Banner({ image }) {
  return (
    <div className="img-wrapper z-0">
      <img className="w-full" src={image.src} alt={image.alt} />
    </div>
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
          className="m-1">
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
  return <div className="flex">{renderIndicator()}</div>;
}

function NextButton({ onNext }) {
  return (
    <button
      onClick={() => onNext()}
      className="md:hidden md:group-hover:block absolute top-[42.5%] right-[2%]">
      <FaAngleRight size={25} color="red" />
    </button>
  );
}

function PrevButton({ onPrev }) {
  return (
    <button
      onClick={() => onPrev()}
      className="md:hidden md:group-hover:block absolute top-[42.5%] left-[2%]">
      <FaAngleLeft size={25} color="red" />
    </button>
  );
}
