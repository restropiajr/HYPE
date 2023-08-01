import { useEffect, useState } from 'react';
import { Vortex } from 'react-loader-spinner';

export function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bottom-[30%] flex items-center justify-center">
        <Vortex
          visible={true}
          height="150"
          width="150"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'black', 'red', 'black', 'red', 'black']}
        />
      </div>
    );
  }

  return (
    <>
      <div className="contact-container w-full">
        <div className="row-one">
          <div className="col-one mb-8 mt-24 flex w-full flex-col items-center justify-center">
            <h2 className="text-3xl">CONTACT US</h2>
            <br />
            <h3 className="mb-2 text-2xl">STORE ADDRESS:</h3>
            <p className="text-xl">123 MAIN STREET</p>
            <p className="text-xl">SAN DIEGO, CA 92126</p>
            <br />
            <h3 className="mb-2 text-2xl">STORE HOURS:</h3>
            <p className="text-xl">MONDAY-FRIDAY 8AM-5PM</p>
            <br />
            <h3 className="mb-2 text-2xl">STORE PHONE NUMBER:</h3>
            <p className="text-xl">(123) 456-7890</p>
            <br />
            <h3 className="mb-2 text-2xl">STORE EMAIL:</h3>
            <p className="text-xl">storehype@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
