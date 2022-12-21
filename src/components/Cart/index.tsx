import { StlyesCart } from "./style";
import { StyledTypography } from "../BaseTypography/style";
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { ProductsListCart } from "../ListCart";
import { CartEmpty } from "../CartEmpty";
import { StyledButtons } from "../../styles/Buttons";


export function MyCart() {
  const { cart, SetCart, ContValue, setCurrentSale, setModalCart } = useContext(HomeContext)

  return (
    <StlyesCart>
      <div>
        <StyledTypography tag="h2" classText="Heading3">
          Carrinho de Compras
        </StyledTypography>
        <StyledButtons nameButtons="bntOne" onClick={() => {
          setModalCart(false)
        }}>X</StyledButtons>
      </div>
      {cart ? (
        <>
          <ProductsListCart />
          <section>
            <StyledTypography tag="p" classText="Body600">
              Total
              <span>
                $ {ContValue()}
              </span>
            </StyledTypography>
            <StyledButtons
              nameButtons="bntTwo"
              onClick={() => {
                setCurrentSale([]);
                SetCart(false)
              }}
            >
              Remover todos os Itens
            </StyledButtons>
          </section>
        </>
      ) : (
        <>
          <CartEmpty />
        </>
      )}
    </StlyesCart>
  );
}
