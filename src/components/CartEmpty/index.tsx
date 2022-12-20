
import { StyledTypography } from "../BaseTypography/style";
import { StlyesCartEmpty } from "./style";
export function CartEmpty() {
  return (
    <StlyesCartEmpty>
       <StyledTypography tag="h2" classText="Heading3">
          Sua sacola está vazia
        </StyledTypography>
        <StyledTypography tag="h4" classText="Body">
          Sua sacola está vazia
        </StyledTypography>
    </StlyesCartEmpty>
  );
}
