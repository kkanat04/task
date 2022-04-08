import axios from "axios";
import { getDetailsMovieAction } from "../action/action";

export const getDetailsMovieAsync = (id) => {
  return dispatch => {
    dispatch(getDetailsMovieAction({}))
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=672f1ca1a8c2e9b10fae2e295456ec50`).then(res => {
      dispatch(getDetailsMovieAction(res.data))
    })
  }
}
