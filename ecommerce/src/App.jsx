import { useState } from "react";
import "./App.css";
import { Products } from "./components/Products.jsx";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header.jsx";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (product.category === filters.category || filters.category === "all") &&
        product.price >= filters.minPrice
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header onChange={setFilters}/>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
