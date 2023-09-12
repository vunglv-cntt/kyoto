import { cartActionType, cartInitialState, cartReducer } from "./cartReducer";
import combineReducers from "./combineReducers";
import {
  layoutActionType,
  layoutInitialState,
  layoutReducer,
} from "./layoutReducer";
import {
  branchReducer,
  branchInitialState,
  branchActionType,
} from "./branchReducer";

export type rootActionType =
  | layoutActionType
  | cartActionType
  | branchActionType;

export const initialState = {
  layout: layoutInitialState,
  cart: cartInitialState,
  branch: branchInitialState,
};

export const rootReducer = combineReducers({
  layout: layoutReducer,
  cart: cartReducer,
  branch: branchReducer,
});
