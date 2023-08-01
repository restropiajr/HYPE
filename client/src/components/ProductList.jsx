import { Link } from 'react-router-dom';

export function ProductList({
  products,
  sortByInput,
  filterByInput,
  searchByInput,
}) {
  return (
    <div className="row-three flex flex-wrap">
      {products.map((product) => {
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
  const { productId, name, price, description, imageUrl } = product;
  return (
    <Link to={`/details/${productId}`}>
      <div className="card-wrapper m-8">
        <div className="img-wrapper w-full">
          <img className="w-full" src={imageUrl} alt="name" />
        </div>
        <div className="card-body flex flex-col items-center justify-center">
          <h4 className="card-title m-2 text-xl">{name}</h4>
          <p className="card-description m-2 text-lg">{description}</p>
          <p className="card-price m-2 text-lg font-bold">{`$${Number(
            price
          ).toFixed(2)}`}</p>
        </div>
      </div>
    </Link>
  );
}
