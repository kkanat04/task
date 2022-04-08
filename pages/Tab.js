import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Footer from "./Footer/Footer";
import React from "react";
import { Screens } from "./Screens";

function Tab() {

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={() => <Footer />}>
      <Tab.Screen
        name="Screen"
        component={Screens}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>

  );
}

export default Tab;
