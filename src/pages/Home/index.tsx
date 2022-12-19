function HomePage(

  ) {
    return (
      <>
        <Header products={products} setFilteredProducts={setFilteredProducts} />
        <StyleMain>
          <ProductsList
            filteredProducts={filteredProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            SetCart={SetCart}
          />
          <MyCart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cart={cart}
            SetCart={SetCart}
          ></MyCart>
        </StyleMain>
      </>
    );
  }
  
}

export default HomePage