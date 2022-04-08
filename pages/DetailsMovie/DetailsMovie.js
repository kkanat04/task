import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsMovieAsync } from "../../redux/async/getDetailsMovieAsync";
import Header from "../Header/Header";


const DetailsMovie = (props) => {
  const [id, setId] = useState(props.route.params)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsMovieAsync(id));
  }, [id]);
  const detailMovie = useSelector(state => state.getMovieListReducer.detailMovie);
  console.log(detailMovie);
  return (
    <View>
      <Header data={detailMovie?.title} />
      {
        Object.keys(detailMovie).length > 0 ?
          <>
            <Image style={{ width: "40%", height: 200 }}
                   source={{ uri: `https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}` }} />
            <Text>{detailMovie?.title}</Text>
            <Text>{detailMovie?.budget}</Text>
            {detailMovie?.genres.map((el,i) => {
              return (
                <View key={i}>
                  <Text>{el.name}</Text>
                </View>
              )
            })}
          </> : <Text>Loading...</Text>
      }
    </View>
  );
};

export default DetailsMovie;

