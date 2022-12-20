import { useContext, useEffect } from "react";
import { MyCart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductsList";
import { HomeContext, HomeProvider } from "../../context/HomeContext";
import { StyleMain } from "./style";

function HomePage() {

  return (
    <HomeProvider>
      <Header />
      <StyleMain>
        <ProductsList />
        <MyCart />
      </StyleMain>
    </HomeProvider>
  );
}



export default HomePage