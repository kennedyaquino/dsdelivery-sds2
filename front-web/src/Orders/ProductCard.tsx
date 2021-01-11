import { formartPrice } from "./helpers";
import { Product } from "./types";

type Props = {
  product: Product;
  onSelectProduct: (product: Product) => void;
  IsSelected: boolean;
};

function ProductCard({ product, onSelectProduct, IsSelected }: Props) {
  return (
    <div
      className={`order-card-container ${IsSelected ? "selected" : ""}`}
      onClick={() => onSelectProduct(product)}
    >
      <h3 className="order-card-title">{product.name}</h3>
      <img
        src={product.imageUri}
        alt={product.name}
        className="order-card-image"
      />
      <h3 className="order-card-price">{formartPrice(product.price)}</h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
