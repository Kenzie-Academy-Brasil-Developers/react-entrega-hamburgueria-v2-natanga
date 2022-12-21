import { useContext, useEffect } from "react";
import { HomeContext } from "../../context/HomeContext";
import { Product } from "../ProductCard";
import { StlyesList } from "./style";

export function ProductsList() {

  const { get, filteredProducts } = useContext(HomeContext)

  useEffect(() => {
    get()
  }, [])

  return (
    <StlyesList>
      {filteredProducts?.map((product) =>
        <Product product={product}  key={product.id} />
      )}
    </StlyesList>
  );
}
