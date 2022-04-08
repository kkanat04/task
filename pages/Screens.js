import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsMovie from "./DetailsMovie/DetailsMovie";
import { MoviesList } from "./MoviesList/MoviesList";
import Favourites from "./Favourites/Favourites";

const Stack = createNativeStackNavigator();

export const Screens = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name={"MoviesList"} component={MoviesList} options={{ headerShown: false }} />
        <Stack.Screen name={"DetailsMovie"} component={DetailsMovie} options={{ headerShown: false }} />
        <Stack.Screen
          name="Favourites"
          component={Favourites}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};
