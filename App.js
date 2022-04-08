import React  from "react";
import {  SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./pages/Tab";
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Tab />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
