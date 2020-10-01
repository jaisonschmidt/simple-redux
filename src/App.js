import React from 'react';
import { useDispatch } from 'react-redux';
import { CombinedActions as CA } from "./store/combinedActions";

import "./assets/css/global.css";

import PRODUCT_MOCK from "./products.json";

import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function App() {

  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <ProductList products={[]} />
      
      <div className="py-3">
        <button type="button" 
            className="btn btn-danger btn-block" 
            onClick={() => dispatch(CA.ProductsActions.setProducts(PRODUCT_MOCK))}
        >
          Carrega produtos na store
        </button>
      </div>

    </>
  );
}

export default App;
