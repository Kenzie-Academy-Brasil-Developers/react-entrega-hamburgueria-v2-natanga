import { Header } from "../../components/Header";
import PageCart from "../../components/pageCart";
import { ProductsList } from "../../components/ProductsList";
import { HomeProvider } from "../../context/HomeContext";
import { StyleMain } from "./style";

function HomePage() {
  return (
    <HomeProvider>
      <Header />
      <StyleMain>
        <ProductsList />
      </StyleMain>
      <PageCart />
    </HomeProvider>
  );
}



export default HomePage