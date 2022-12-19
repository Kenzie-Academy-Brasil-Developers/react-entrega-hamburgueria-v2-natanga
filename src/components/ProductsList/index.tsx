import { Product } from "./Product/";
import { StlyesList } from "./style";

export function ProductsList({SetCart, filteredProducts ,currentSale,setCurrentSale }) {
  return (
    <StlyesList>
      {filteredProducts.map((product) => 
        <Product 
        SetCart={SetCart} product={product} key={product.id}setCurrentSale={setCurrentSale} currentSale={currentSale}></Product>
      )}
    </StlyesList>
  );
}
