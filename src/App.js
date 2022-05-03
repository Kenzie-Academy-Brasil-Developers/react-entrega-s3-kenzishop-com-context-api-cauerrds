import { Header } from "./components/Header";
import { Resumo } from "./components/Resumo";
import { Routes } from "./routes/routes";

import { CartProvider } from "./providers/cart";
import { ProductsProvider } from "./providers/products";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <GlobalStyle />
          <Header />
          <Resumo />
          <Routes />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
