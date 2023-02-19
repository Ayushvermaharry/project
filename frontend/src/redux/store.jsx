import { createStore,combineReducers ,applyMiddleware} from 'redux';
import AuthReducer from './reducers/AuthReducer';
import authErrorReducer from './reducers/AuthErrorReducer';
import thunk from "redux-thunk";
import { productReducer } from './reducers/ProductReducer';

import customizationReducer from './reducers/customizationReducer';

const rootReducer = combineReducers({
    authState: AuthReducer,
    authError: authErrorReducer,
    allProducts: productReducer,
    customization: customizationReducer
  });


const store = createStore( rootReducer,applyMiddleware(thunk));

export default store;
