import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { StyledButtons } from "../../Styles/Buttons";
import { StyledTypography } from "../BaseTypography/style";
import { StlyesProduct } from "./style";

export function CardCarts({ product }) {
  const { removeCart } = useContext(HomeContext)
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
            removeCart(product);
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
