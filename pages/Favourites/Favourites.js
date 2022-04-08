import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Favourites = () => {
  const favourites = useSelector(state => state.getMovieListReducer.favourites);
  const navigation = useNavigation()
  const detailMovie = (id) => {
    navigation.navigate('DetailsMovie', id)
  }
  return (
    <>
      <Header data={"Favourites"} />
      <ScrollView>

      {favourites.length > 0 ? favourites?.map((el,i) => {
        return (
          <TouchableOpacity onPress={() => detailMovie(el.id)} key={i}>
            <View>
              <Image style={{width: '70%', height: 300}} source={{uri: `https://image.tmdb.org/t/p/w500/${el.poster_path}`}} />
              <Text>{el.title}</Text>
            </View>
          </TouchableOpacity>
        )
      }): <Text style={{textAlign: 'center'}}>No featured movies yet...</Text>}
      </ScrollView>
    </>
  );
};

export default Favourites;
