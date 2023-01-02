import { useContext, useEffect } from "react";
import { HomeContext } from "../../context/HomeContext";
import { Product } from "../ProductCard";
import { StlyesList } from "./style";

export function ProductsList() {

  const { filteredProducts } = useContext(HomeContext)

  return (
    <StlyesList>
      {filteredProducts?.map((product) =>
        <Product product={product} key={product.id} />
      )}
    </StlyesList>
  );
}
