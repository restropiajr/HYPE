import { FaAngleUp } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

export function ScrollUpButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-2 right-2 bg-red-600 p-2 rounded ${
        showButton ? 'opacity-100' : 'opacity-0'
      } transition duration-200 ease-in-out md:hover:bg-white`}>
      <FaAngleUp size={25} color="black" />
    </button>
  );
}
