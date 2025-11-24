import { useState } from "react";
import "./Filters.css";
export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [category, setCategory] = useState("all");

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <>
      <section className="filters">
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max="2000"
            onChange={handleMinPriceChange}
            value={minPrice}
          />
          <span>{minPrice} €</span>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={handleCategoryChange}>
            <option value="all">All</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Smartphones</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skin care</option>
          </select>
        </div>
      </section>
    </>
  );
}
