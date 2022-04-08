import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListAsync } from "../../redux/async/getMovieListAsync";
import { useNavigation } from "@react-navigation/native";
import Header from "../Header/Header";

export const MoviesList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pageCurrent, setPageCurrent] = useState(1)
  const dispatch = useDispatch();
  const movie = useSelector(state => state.getMovieListReducer.movie);
  const navigation = useNavigation();
  console.log(movie);
  useEffect(() => {
    setIsLoading(true)
    dispatch(getMovieListAsync(setIsLoading, pageCurrent, movie));
  }, [pageCurrent]);
  const detailMovie = (id) => {
    navigation.navigate("DetailsMovie", id);
  };

  const renderItem = ({ item, i }) => {
    return (
      <TouchableOpacity onPress={() => detailMovie(item.id)} key={i}>
        <Image style={{ width: "30%", height: 170 }}
               source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return (
      isLoading ?
      <View>
        <ActivityIndicator size={'large'} />
      </View> : null
    )
  }

  const handleLeadMore = () => {
    setPageCurrent(pageCurrent + 1)
    setIsLoading(true)
  }
  return (
    // <>
    //   <Header data={'Films'} />
    //   <ScrollView style={{flex: 1}}>
    //       {Object.keys(movie).length > 0 ? movie?.results?.map((el,i) => {
    //         return (
    //             <TouchableOpacity onPress={() => detailMovie(el.id)} key={i}>
    //               <View>
    //                 <Image style={{width: '70%', height: 300}} source={{uri: `https://image.tmdb.org/t/p/w500/${el.poster_path}`}} />
    //                 <Text>{el.title}</Text>
    //               </View>
    //             </TouchableOpacity>
    //
    //         )
    //       }) : <Text>Loading...</Text>}
    //
    //   </ScrollView>
    // </>
    <View style={{marginBottom: 80}}>
      <Header data={'Films'} />
      <FlatList data={movie}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0}
                ListFooterComponent={renderFooter}
                onEndReached={handleLeadMore}
      />
    </View>
  );
};
