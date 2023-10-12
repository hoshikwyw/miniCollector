import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { ChakraProvider } from '@chakra-ui/react'
import { store } from "./services/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </Provider>
);
