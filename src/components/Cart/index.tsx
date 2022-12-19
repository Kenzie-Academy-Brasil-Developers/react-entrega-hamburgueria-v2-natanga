import { StlyesCart } from "./style";
import { StyledTypography } from "../BaseTypography/style";
import { ProductsListCart } from "./ListCart";
import { StyledButtons } from "../../Styles/Buttons";
import { CartEmpty } from "./CartEmpty";

export function MyCart({ currentSale, setCurrentSale, cart, SetCart }) {
  function ContValue() {
    const values = currentSale.map((element) =>  element.price * element.quant);
    const value = values.reduce((valueOne, valueTwo) => valueOne + valueTwo, 0);
    return value;
  }

  return (
    <StlyesCart>
      <div>
        <StyledTypography tag="h2" classText="Heading3">
          Carrinho de Compras
        </StyledTypography>
      </div>
      {cart ? (
        <>
          <ProductsListCart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            SetCart={SetCart}
          />
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
