import React from "react";
import ReactDOM from 'react-dom/client'
import AppRouter from "./Router/router";
import ProductState from "./Context/productState";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ProductState>
   <AppRouter/>
   </ProductState>
  </React.StrictMode>,
)