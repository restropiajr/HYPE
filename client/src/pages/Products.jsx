import { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
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
      <Circles
        height="80"
        width="80"
        color="red"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
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
          <div className="col-one mb-8 flex w-full flex-col justify-center">
            <div className="mb-2 flex w-full items-center justify-center border-2 border-black">
              <p className="m-2 text-sm">FILTER BY:</p>
              <select
                name="categories"
                className="m-2 rounded border border-black text-center text-xs"
                onChange={(event) => setSortByInput(event.target.value)}>
                <option value="a-to-z">A-Z</option>
                <option value="z-to-a">Z-A</option>
                <option value="desc">HIGHEST PRICE</option>
                <option value="asc">LOWEST PRICE</option>
              </select>
              <select
                name="categories"
                onChange={(event) => setFilterByInput(event.target.value)}
                className="m-2 rounded border border-black text-center text-xs">
                <option value="">CHOOSE A CATEGORY</option>
                <option value="shoe">SHOES</option>
                <option value="top">TOPS</option>
                <option value="bottom">BOTTOMS</option>
                <option value="accessory">ACCESSORIES</option>
              </select>
            </div>
            <div className="flex w-full items-center justify-center border-2 border-black">
              <input
                type="search"
                onChange={(event) => setSearchByInput(event.target.value)}
                placeholder="SEARCH"
                className="m-2 rounded border border-black p-2 text-center text-xs"
              />
            </div>
          </div>
        </div>
        <div className="row-three flex flex-wrap">
          <ProductList
            products={products}
            sortByInput={sortByInput}
            filterByInput={filterByInput}
            searchByInput={searchByInput}
          />
        </div>
      </div>
    </>
  );
}
