import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LoadingSpinner } from '../components';

export function ProductList({
  products,
  sortByInput,
  filterByInput,
  searchByInput,
}) {
  let copyProducts = [...products];
  const [debouncedSortInput, setDebouncedSortInput] = useState(sortByInput);
  const [debouncedSearchInput, setDebouncedSearchInput] =
    useState(searchByInput);
  const [debouncedfilterInput, setDebouncedFilterInput] =
    useState(filterByInput);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setDebouncedSortInput(sortByInput);
      setDebouncedFilterInput(filterByInput);
      setDebouncedSearchInput(searchByInput);
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [sortByInput, filterByInput, searchByInput]);

  if (debouncedSortInput === 'alpha-order') {
    copyProducts.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  } else if (debouncedSortInput === 'reverse-alpha-order') {
    copyProducts.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0;
    });
  } else if (debouncedSortInput === 'asc') {
    copyProducts.sort((a, b) => {
      const priceA = Number(a.price);
      const priceB = Number(b.price);
      if (priceA < priceB) return -1;
      if (priceA > priceB) return 1;
      return 0;
    });
  } else if (debouncedSortInput === 'desc') {
    copyProducts.sort((a, b) => {
      const priceA = Number(a.price);
      const priceB = Number(b.price);
      if (priceA < priceB) return 1;
      if (priceA > priceB) return -1;
      return 0;
    });
  }

  function filterByComparison() {
    return copyProducts.filter(
      (product) => product.category === debouncedfilterInput
    );
  }

  function searchByComparison() {
    return copyProducts.filter((product) =>
      product.name.toLowerCase().includes(debouncedSearchInput.toLowerCase())
    );
  }

  function filterBySearchByComparison() {
    return filterByComparison().filter((product) =>
      product.name.toLowerCase().includes(debouncedSearchInput.toLowerCase())
    );
  }

  if (filterByInput && searchByInput) {
    copyProducts = filterBySearchByComparison();
  } else if (filterByInput) {
    copyProducts = filterByComparison();
  } else if (searchByInput) {
    copyProducts = searchByComparison();
  }

  const productsFound = copyProducts.length > 0;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {productsFound ? (
        <div className="row-three flex flex-wrap">
          {copyProducts.map((product) => {
            return (
              <div key={product.productId} className="col flex w-full md:w-1/4">
                <Product product={product} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-16 flex items-center justify-center">
          <p className="text-center text-xl">No Products Found</p>
        </div>
      )}
    </>
  );
}

function Product({ product }) {
  const { productId, name, price, imageUrl } = product;
  return (
    <div className="card-wrapper group m-8">
      <Link to={`/product/details/${productId}`}>
        <div className="img-wrapper w-full">
          <img className="w-full" src={imageUrl} alt="name" />
        </div>
        <div className="card-body flex flex-col items-center justify-center">
          <h4 className="card-name rounded p-2 text-xl transition duration-200 ease-in-out md:group-hover:bg-red-600">
            {name}
          </h4>
          <p className="card-price text-lg font-bold">{`$${price}`}</p>
        </div>
      </Link>
    </div>
  );
}
