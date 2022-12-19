import { StyledButtons } from "../../../../Styles/Buttons";
import { StyledTypography } from "../../../BaseTypography/style";
import { StlyesProduct } from "./style";

export function CardCarts({ product, currentSale, setCurrentSale, SetCart }) {
  function removeCart() {
    const item = currentSale.find((item) => item.id == product.id);
    const newValue = currentSale.filter((item) => item.id !== product.id);
    if (item.quant > 1) {
      item.quant = item.quant - 1;
      setCurrentSale([...newValue, item]);
    } else {
      setCurrentSale(newValue);
      if (newValue.length == 0) {
        SetCart(false);
      }
    }
  }
  return (
    <StlyesProduct>
      <figure>
        <img src={product.img} alt="" />
      </figure>
      <div>
        <StyledTypography tag="h2" classText="Heading3">
          {product.name}
        </StyledTypography>
        <StyledTypography tag="h4" classText="Caption">
          {product.category}
        </StyledTypography>
      </div>
      <article>
        <StyledButtons
          nameButtons="bntTree"
          onClick={() => {
            removeCart();
          }}
        >
          Remover
        </StyledButtons>
        <StyledTypography tag="h2" classText="Heading3">
          {product.quant}
        </StyledTypography>
      </article>
    </StlyesProduct>
  );
}
