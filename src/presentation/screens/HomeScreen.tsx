import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";
import React, { useMemo } from "react";
import InfoLocation from "../components/InfoLocation";
import useRickApi from "../../domain/useCases/useRickApi";
import { useQuery, useRealm } from "../../data/services/localServices/realm";
import IsFavoriteComp from "../components/IsFavoriteComp";
import useCheckFavorite from "../../domain/useCases/useCheckFavorite";
export default function HomeScreen() {
  const { rickResults,setRickResults } = useRickApi();
  const {handleFavoriteToggle} = useCheckFavorite({setCharacters:setRickResults})
  const results = useMemo(() => rickResults, [rickResults])
  const renderColorStatus = (status: string) => {
    switch (status) {
      case "Alive":
        return "green";

      case "Dead":
        return "red";

      default:
        return "orange";
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <View style={{ marginBottom: 25 }}>
        <InfoLocation />
      </View>

      <FlatList
        style={{ flex: 1 }}
        numColumns={2}
        data={results}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ flex: 1, marginBottom: 12 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 150, height: 150, borderRadius: 90 }}
              />
              <View style={{flexDirection:"row"}}>
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
                        backgroundColor: renderColorStatus(item.status),
                        borderRadius: 100,
                        marginRight: 5,
                      }}
                    />
                    <Text>{item.status}</Text>
                  </View>
                </View>

                <IsFavoriteComp onPress={()=>handleFavoriteToggle(item.id) } isFavorite={item.isFavorite}/>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
