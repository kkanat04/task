import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React  from "react";
import { useNavigation } from "@react-navigation/native";


function Footer() {
  const navigation = useNavigation()
  return (
    <View style={styles.footer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1, paddingVertical: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('MoviesList')}><Text>Movies</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Favourites')}><Text>Favourites</Text></TouchableOpacity>
            </View>
    </View>

  );
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'gray',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    justifyContent: 'center'
  },
});
