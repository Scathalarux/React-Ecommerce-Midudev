import { AddToCartIcon } from "./Icons.jsx";
import "./Products.css";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.slice(0,10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <span>{product.price} €</span>
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
