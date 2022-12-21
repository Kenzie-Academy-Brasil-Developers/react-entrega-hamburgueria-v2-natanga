import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { CardCarts } from "../CardCarts";
import { StlyesList } from "./style";

export function ProductsListCart() {
  const { currentSale } = useContext(HomeContext)
  return (
    <StlyesList>
      {currentSale.map((iten) => (
        <CardCarts product={iten} key={iten.id}/>
      ))}
    </StlyesList>
  );
}
