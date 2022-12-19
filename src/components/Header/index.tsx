import { StyledTypography } from "../BaseTypography/style";
import { Form } from "./Form";
import { StyledHeader } from "./style";
export function Header({ products, setFilteredProducts }) {
  return (
    <StyledHeader>
      <div>
        <StyledTypography tag="h1" classText="Heading1">
          <span> Nono's</span> Burguer
        </StyledTypography>
        <Form
          products={products}
          setFilteredProducts={setFilteredProducts}
        ></Form>
      </div>
    </StyledHeader>
  );
}
