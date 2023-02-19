import axios from "axios";
import { useState } from "react";

export const FilterActionType = {
    FILTER_SUCCESS:"FILTER_SUCCESS",
    FILTER_FAILED:"FILTER_FAILED",
}

export const ProductActionType={
    SET_PRODUCTS:"SET_PRODUCTs",
    SELECTED_PRODUCT: "SELECTED_PRODUCT",
    REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",
};

export const setProduct=(products)=>{
    return{
        type: ProductActionType.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct =(product)=>{
    return{
        type:ProductActionType.SELECTED_PRODUCT,
        payload:product
    };
};




export const filterAction = (productFiltersData) => {
    const requestURL = "http://"
    // const [resquestBody, setRequestBody] = useState({
    //     productFiltersData
    // })

    return async (dispatch) =>{
        try{
            const response = await axios.post(requestURL)
            const {data} = response;
            dispatch({
                type:FilterActionType.FILTER_SUCCESS,
                payload:data
            })
        }catch (error){
            if(error){
                dispatch({
                    type:FilterActionType.FILTER_FAILED,
                    payload: error
                });
            }
        }
        
    }
}
