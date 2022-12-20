
import { StyledTypography } from "../BaseTypography/style";
import { SheradItens } from "../SheradItens";
import { StyledHeader } from "./style";
export function Header() {
  return (
    <StyledHeader>
      <div>
        <StyledTypography tag="h1" classText="Heading1">
          <span> Nono's</span> Burguer
        </StyledTypography>
        <SheradItens/>
      </div>
    </StyledHeader>
  );
}
