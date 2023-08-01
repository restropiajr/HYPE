import { Link } from 'react-router-dom';

export function ProductList({
  products,
  sortByInput,
  filterByInput,
  searchByInput,
}) {
  let copyProducts = [...products];

  if (sortByInput === 'alpha-order') {
    copyProducts.sort();
  } else if (sortByInput === 'reverse-alpha-order') {
    copyProducts.reverse();
  } else if (sortByInput === 'asc') {
    copyProducts.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (sortByInput === 'desc') {
    copyProducts.sort((a, b) => Number(b.price) - Number(a.price));
  }

  function filterByComparison() {
    return copyProducts.filter((product) => product.category === filterByInput);
  }

  function searchByComparison() {
    return copyProducts.filter((product) =>
      product.name.toLowerCase().includes(searchByInput.toLowerCase())
    );
  }

  function filterBySearchByComparison() {
    return filterByComparison().filter((product) =>
      product.name.toLowerCase().includes(searchByInput.toLowerCase())
    );
  }

  if (filterByInput && searchByInput) {
    copyProducts = filterBySearchByComparison();
  } else if (filterByInput) {
    copyProducts = filterByComparison();
  } else if (searchByInput) {
    copyProducts = searchByComparison();
  }

  return (
    <div className="row-three flex flex-wrap">
      {copyProducts.map((product) => {
        return (
          <div key={product.productId} className="col flex w-full md:w-1/4">
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
}

function Product({ product }) {
  const { productId, name, price, imageUrl } = product;
  return (
    <Link to={`/details/${productId}`}>
      <div className="card-wrapper m-8">
        <div className="img-wrapper w-full">
          <img className="w-full" src={imageUrl} alt="name" />
        </div>
        <div className="card-body flex flex-col items-center justify-center">
          <h4 className="card-title m-2 text-xl">{name}</h4>
          <p className="card-price m-2 text-lg font-bold">{`$${Number(
            price
          ).toFixed(2)}`}</p>
        </div>
      </div>
    </Link>
  );
}
