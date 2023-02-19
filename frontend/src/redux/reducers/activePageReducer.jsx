import { activePageActionType } from "../actions/activePageAction";

const activeState = false ;

const activePageReducer = (state= activeState , action) => {
    switch(action.Type){
        case activePageActionType.HOME_ACTIVE:
            return { callingPage: action.payload};
        case activePageActionType.PRODUCT_ACTIVE:
            return { callingPage: action.payload};
        default:
            return state;

    }
};

export default activePageReducer;