import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function ErrorMessage({ error }) {
  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <p className="mx-4 mb-8 text-center text-xl text-red-600">
        ERROR: {error.message}
      </p>
      <Link
        to="/"
        className="flex cursor-pointer items-center justify-center rounded p-2 transition duration-200 ease-in-out md:hover:bg-red-600">
        <FaArrowLeftLong size={30} color={'black'} />
        <p className="p-2 text-center text-xl font-bold">BACK TO HOME</p>
      </Link>
    </div>
  );
}
