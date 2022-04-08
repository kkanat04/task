import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducers/MovieReducer";

const reducers = combineReducers({
  getMovieListReducer: movieReducer
})
export const store = createStore(reducers, applyMiddleware(thunk))
