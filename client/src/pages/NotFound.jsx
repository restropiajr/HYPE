import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function NotFound() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <p className="mb-8 text-center text-xl font-bold">PAGE NOT FOUND</p>
      <Link
        to="/"
        className="flex cursor-pointer items-center justify-center rounded p-2 transition duration-200 ease-in-out md:hover:bg-red-600">
        <FaArrowLeftLong size={30} color={'black'} />
        <p className="p-2 text-center text-xl font-bold">BACK TO HOME</p>
      </Link>
    </div>
  );
}
