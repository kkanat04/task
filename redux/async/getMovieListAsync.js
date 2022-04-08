import axios from "axios";
import { getMovieListAction } from "../action/action";

export const getMovieListAsync = (setIsLoading, pageCurrent, movie) => {
  return dispatch => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=672f1ca1a8c2e9b10fae2e295456ec50&page=' + pageCurrent).then(res => {
       const newMovie = movie.concat(res.data.results)
      dispatch(getMovieListAction(newMovie))
      setIsLoading(false)
    })
  }
}
