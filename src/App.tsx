import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { RoutePages } from "./routes";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import { CartProvider } from "./hooks/useCart";

import { store } from "./util/store";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CartProvider>
          <GlobalStyles />
          <Header />
          <RoutePages />
          <ToastContainer autoClose={3000} />
        </CartProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
