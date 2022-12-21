import { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";
import { MyCart } from "../Cart";
import { StyledModalCart } from "./styled";

function PageCart() {
    const { modalCart } = useContext(HomeContext)
    return (
        <>
            {modalCart && <StyledModalCart>
                < MyCart />
            </StyledModalCart >}
        </>
    );
}

 
export default PageCart