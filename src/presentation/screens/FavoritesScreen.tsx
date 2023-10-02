import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import useFavoritesCallbacks from "../../domain/useCases/useFavoritesCallbacks";
import { useRealm } from "../../data/services/localServices/realm";

export default function FavoritesScreen() {
  const { favorities,deleteItemById, getFavoritiesCharacters } = useFavoritesCallbacks();
   const realm = useRealm()
  return (
    <View style={{ flex: 1, marginHorizontal: 10, marginTop: 12 }}>
      <FlatList
        style={{ flex: 1 }}
        numColumns={2}
        data={favorities}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ flex: 1, marginBottom: 12 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 150, height: 150, borderRadius: 90 }}
              />
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={{ fontSize: 20, color: "#3b8139" }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 16 }}>{item.location.name}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "red",
                        borderRadius: 100,
                        marginRight: 5,
                      }}
                    />
                    <Text>{item.status}</Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={{ marginLeft: 12, justifyContent: "center" }}
                  onPress={() => {
                    
                  }}
                >
                  <Image
                    source={require("../../assets/deleteIcon.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
