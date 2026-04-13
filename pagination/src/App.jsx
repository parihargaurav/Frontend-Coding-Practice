import "./App.css";
import Products from "./Components/Products";
import { useEffect, useState } from "react";
import { PAGE_SIZE } from "./constants";
import Pagination from "./Components/Pagination.jsx";

function App() {
  
  const [products, setProducts] = useState([]);
  const [currentpage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=45");
    const json = await data.json();
    setProducts(json.products);
    console.log(json.products);
  };
  // we have used useeffect to load the fetch function when the page reloads
  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentpage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
const goToPreviousPage = () => {
  
    setCurrentPage((prev)=> prev - 1);
};
const goToNextPage = () => {
  
    setCurrentPage((prev)=> prev + 1);
  
};

  return !products.length ? (
    <h1>No Products Found</h1>
  ) : (
    <>
      <h1>Pagination</h1>

      <div className="products-container">
        {products.slice(start, end).map((p) => (
          <Products key={p.id} image={p.images[0]} title={p.title} />
        ))}
      </div>
      <Pagination goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} handlePageChange={handlePageChange} currentpage={currentpage} noOfPages={noOfPages} />
    </>
  );
}

export default App;
