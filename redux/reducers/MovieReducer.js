let initialState = {
  movie: [],
  detailMovie: {},
  favourites: [],
  titleFavourites: []
};

const getMovieList = 'getMovieList'
const getDetailsMovieAction = 'getDetailsMovieAction'
const addFavourites = 'addFavourites'
const addTitleFavourites = 'addTitleFavourites'
const deleteFavourites = 'deleteFavourites'

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case getMovieList :
      return {...state, movie: action.payload}
    case getDetailsMovieAction :
      return {...state, detailMovie: action.payload}
    case addFavourites :
      return {...state, favourites: [...state.favourites, action.payload]}
    case addTitleFavourites :
      return {...state, titleFavourites: [...state.titleFavourites, action.payload]}
    case deleteFavourites :
      return {...state, favourites: action.payload}
    default:
      return {...state}
  }
}
