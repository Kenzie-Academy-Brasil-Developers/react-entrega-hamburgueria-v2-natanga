import { CardCarts } from "./CardCarts";
import { StlyesList } from "./style";

export function ProductsListCart({ currentSale, setCurrentSale,SetCart}) {
  return (
    <StlyesList>
      {currentSale.map((product) => (
        <CardCarts
          product={product}
          key={product.id}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          SetCart={SetCart}
        ></CardCarts>
      ))}
    </StlyesList>
  );
}
