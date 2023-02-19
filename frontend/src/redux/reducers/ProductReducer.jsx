import { ProductActionType } from "../actions/ProductAction"
import { FilterActionType } from "../actions/ProductAction";
const productState={
    products:[],
};

const filterState ={

}
export const filterReducer = ( state = filterState, action ) =>{
    switch(action.type){
        case FilterActionType.FILTER_SUCCESS:
            
            return filterState
        case FilterActionType.FILTER_FAILED:
            return filterState
        default:
            return state;
    }
}

export const productReducer =(state=productState,{type,payload})=>{
    switch(type){
        case ProductActionType.SET_PRODUCTS:
            return {...state , products:payload};
        default:
            return state;    
    }

};

export const selectedProductReducer =(state={},{type,payload})=>{
    switch(type){
        case ProductActionType.SELECTED_PRODUCT:
            return {...state,...payload};
        default:
            return state;
    }
};