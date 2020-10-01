import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CombinedActions as CA } from "../../store/combinedActions";

export const ProductList = () => {

    const { products } = useSelector(state => state.productState);
    
    const dispatch = useDispatch();

    return (
        <div>
            {products.map( (obj, key) => (
                <button type="button" 
                    className="btn btn-primary btn-block mt-2" 
                    onClick={ () => dispatch(CA.FavActions.addFav(obj))} 
                    key={key}
                >
                    {obj.Title}
                </button>
            ))}
        </div>
    )
}