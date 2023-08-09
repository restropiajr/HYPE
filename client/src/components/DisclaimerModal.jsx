export function DisclaimerModal({ onClick }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-90">
      <div className="flex w-full flex-col items-center justify-center rounded bg-white p-8 shadow-md md:w-1/2">
        <h2 className="m-4 rounded text-center text-3xl">DISCLAIMER</h2>
        <p className="text-md m-4 text-justify md:text-xl">
          This website is for educational purposes only, not for real
          transactions or sensitive information. Brands, logos, and trademarks
          are owned by their respective owners and used for educational
          demonstration. This site is not affiliated with or endorsed by
          mentioned brands. No products or services are for sale here. Content
          is for learning and practice only. Visitors should not consider
          elements as real business operations.
        </p>
        <p className="text-md m-4 text-justify md:text-xl">
          By clicking the "ACCEPT" button below, you acknowledge that no actual
          purchases will occur, and no payment processing will take place on
          this platform. It's important to refrain from using genuine personal
          information, including real names, addresses, and credit card numbers
          during checkout.
        </p>
        <button
          onClick={onClick}
          className="m-4 cursor-pointer rounded border-2 border-black p-2 text-xl font-bold transition duration-200 ease-in-out md:hover:bg-red-600">
          ACCEPT
        </button>
      </div>
    </div>
  );
}
