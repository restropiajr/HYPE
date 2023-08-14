export function DisclaimerModal({ onClick }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-90">
      <div className="flex w-full flex-col items-center justify-center rounded bg-white p-8 shadow-md lg:w-1/2">
        <h2 className="m-2 rounded text-center text-2xl md:text-3xl">
          DISCLAIMER
        </h2>
        <p className="m-2 text-justify text-sm md:text-xl">
          This website is for educational use only. It does not handle real
          transactions or sensitive information. Brands, logos, and trademarks
          belong to their respective owners and are used for educational
          demonstration. Content is intended for learning and practice purposes
          only.
        </p>
        <p className="m-2 text-justify text-sm md:text-xl">
          By clicking the "ACCEPT" button below, you acknowledge that no actual
          purchases will occur, and no payment processing will take place on
          this platform. It's important to refrain from using genuine personal
          information, including real names, addresses, and credit card numbers
          during checkout.
        </p>
        <h2 className="m-2 rounded text-center text-2xl md:text-3xl">
          STRIPE TEST CHECKOUT
        </h2>
        <p className="m-2 text-justify text-sm md:text-xl">
          When testing interactively, enter "42" repeatedly in all checkout
          field lines. For example, use a card number, such as "4242 4242 4242
          4242".
        </p>
        <button
          onClick={onClick}
          className="mt-4 cursor-pointer rounded border-2 border-black p-2 text-xl font-bold transition duration-200 ease-in-out md:hover:bg-red-600">
          ACCEPT
        </button>
      </div>
    </div>
  );
}
