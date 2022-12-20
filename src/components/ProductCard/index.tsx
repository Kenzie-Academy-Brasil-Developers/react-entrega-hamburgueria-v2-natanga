import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { Iiten } from "../../interface";
import { StyledButtons } from "../../Styles/Buttons";
import { StyledTypography } from "../BaseTypography/style";
import { StlyesProduct } from "./style";

export function Product({ product }) {

  const { AddItenCart } = useContext(HomeContext)


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
            AddItenCart(product);
          }}
        >
          Adicionar
        </StyledButtons>
      </div>
    </StlyesProduct>
  );
}
