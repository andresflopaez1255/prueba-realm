import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../presentation/screens/HomeScreen";
import FavoritesScreen from "../../presentation/screens/FavoritesScreen";
import { useNavigation } from "@react-navigation/native";

export default function HomeStack() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity onPress={()=> navigation.navigate("Favorites")}>
            <Image
             style={{width:30,height:30}}
              source={{
                uri: "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/favorite_add-512.png",
              }}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        options={{ title: "Realm Test" }}
        component={HomeScreen}
      />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}
