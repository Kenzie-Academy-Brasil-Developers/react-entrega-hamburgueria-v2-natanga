
import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { StyledButtons } from "../../styles/Buttons";
import { StyledTypography } from "../BaseTypography/style";
import { SheradItens } from "../SheradItens";
import { StyledHeader } from "./style";
export function Header() {
  const { setModalCart, logout } = useContext(HomeContext)

  return (
    <StyledHeader>
      <div>
        <StyledTypography tag="h1" classText="Heading1">
          <span> Nono's</span> Burguer
        </StyledTypography>
        <nav>
          <SheradItens />
          <div>
            <StyledButtons nameButtons="bntCart" onClick={() => {
              setModalCart(true)
            }} />
            <StyledButtons nameButtons="bntLogout" onClick={() => {
              logout()
            }} />
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
}
