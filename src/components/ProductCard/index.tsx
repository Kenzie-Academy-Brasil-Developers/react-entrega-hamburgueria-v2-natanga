import { StyledButtons } from "../../Styles/Buttons";
import { StyledTypography } from "../BaseTypography/style";
import { StlyesProduct } from "./style";
export function Product({ SetCart, product, currentSale, setCurrentSale }) {
  function AddItenCart() {
    SetCart(true);
    const valid = currentSale.find((element) => element.id === product.id);
    if (valid) {
      valid.quant = valid.quant + 1;
      const newList = currentSale.filter((element) => element.id !== valid.id);
      setCurrentSale([...newList, valid]);
    } else {
      product.quant = 1;
      setCurrentSale([...currentSale, product]);
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
        <StyledTypography tag="h3" classText="Body600">
          $ {product.price}
        </StyledTypography>
        <StyledButtons
          nameButtons="bntOne"
          onClick={() => {
            AddItenCart();
          }}
        >
          Adicionar
        </StyledButtons>
      </div>
    </StlyesProduct>
  );
}
