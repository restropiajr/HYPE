import { useEffect, useState } from 'react';
import { Vortex } from 'react-loader-spinner';
import { productsFetcher } from '../lib';
import { ProductList } from '../components';

export function Products() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [sortByInput, setSortByInput] = useState();
  const [filterByInput, setFilterByInput] = useState();
  const [searchByInput, setSearchByInput] = useState();

  useEffect(() => {
    async function loadProducts() {
      try {
        const loadedProducts = await productsFetcher();
        setProducts(loadedProducts);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadProducts();
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

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-xl">Error Loading Products: {error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="products-container w-full">
        <div className="row-one">
          <div className="col-one mb-8 mt-24 flex w-full flex-col items-center justify-center">
            <h2 className="text-3xl">PRODUCTS</h2>
            <br />
            <p className="px-4 text-justify text-lg">
              Discover the hottest streetwear, exclusive sneakers, and
              trendsetting clothing that define the urban culture. Elevate your
              style and make a statement with our curated collection of iconic
              pieces.
            </p>
          </div>
        </div>
        <div className="row-two">
          <div className="col-one flex w-full flex-col items-center justify-center">
            <div className="flex">
              <select
                name="categories"
                className="m-2 w-40 rounded border-2 border-black bg-red-600 text-center text-xs font-bold"
                onChange={(event) => setSortByInput(event.target.value)}>
                <option value="">--SORT BY--</option>
                <option value="alpha-order">A-Z</option>
                <option value="reverse-alpha-order">Z-A</option>
                <option value="asc">PRICE: LOW TO HIGH</option>
                <option value="desc">PRICE: HIGH TO LOW</option>
              </select>
              <select
                name="categories"
                onChange={(event) => setFilterByInput(event.target.value)}
                className="m-2 w-40 rounded border-2 border-black bg-red-600 text-center text-xs font-bold">
                <option value="">--FILTER BY--</option>
                <option value="">ALL</option>
                <option value="shoe">SHOES</option>
                <option value="top">TOPS</option>
                <option value="bottom">BOTTOMS</option>
                <option value="accessory">ACCESSORIES</option>
              </select>
            </div>
            <input
              type="search"
              onChange={(event) => setSearchByInput(event.target.value)}
              placeholder="SEARCH"
              className="m-2 w-40 rounded border-2 border-black bg-red-600 p-2 text-center text-xs font-bold"
            />
          </div>
        </div>
        <ProductList
          products={products}
          sortByInput={sortByInput}
          filterByInput={filterByInput}
          searchByInput={searchByInput}
        />
      </div>
    </>
  );
}
