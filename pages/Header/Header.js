import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addFavourites, deleteFavourites } from "../../redux/action/action";
import Fav from '../../photos/fav.png'
import Fav2 from '../../photos/fav2.png'

const Header = ({ data }) => {
  const route = useRoute();
  const [sel, setSel] = useState(true);
  const dispatch = useDispatch();
  const detailMovie = useSelector(state => state.getMovieListReducer.detailMovie);
  const favourites = useSelector(state => state.getMovieListReducer.favourites);
  const addFavouritesFunc = () => {
    let index = favourites.findIndex(el => el.title === detailMovie.title);
    let indexBoolen;
    if (index === -1) {
      indexBoolen = false;
    } else {
      indexBoolen = true;
    }
    if (indexBoolen) {
      let newFavourites = favourites.filter(el => {
        return el.id !== detailMovie.id;
      });
      console.log(newFavourites);
      dispatch(deleteFavourites(newFavourites));
    } else {
      dispatch(addFavourites(detailMovie));
    }
  };
  return (
    <View style={{ width: "100%", zIndex: 10, top: 0, left: 0 }}>
      <Text>{data}</Text>
      {route.name === "DetailsMovie" && detailMovie ? <TouchableOpacity
      onPress={addFavouritesFunc}><Image source={sel ? Fav : Fav2} /></TouchableOpacity> : null}
    </View>
  );
};

export default Header;
