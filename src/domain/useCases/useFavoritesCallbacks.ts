import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRealm } from "../../data/services/localServices/realm";
import { Result } from "../../data/models/RicksResults";
import useCheckFavorite from "./useCheckFavorite";
import useRickApi from "./useRickApi";

export default function useFavoritesCallbacks() {
  const [favorities, setfavorities] = useState();
  const { setRickResults } = useRickApi();
  const realm = useRealm();
  const saveitemForFavorite = (item: Result) => {
    try {
      realm.create("FavoriteCharacter", item, Realm.UpdateMode.Modified);
    } catch (error) {
      console.error("Error create Favoritecharacter:", error);
    }
  };

  const deleteItemById = async (characterId: number) => {
    try {
   
        const characterToDelete = realm
          .objects("FavoriteCharacter")
          .filtered("id == $0", characterId)[0];
        if (characterToDelete) {
          realm.delete(characterToDelete);
        }
    
    } catch (error) {
      console.error("Error deleted Favoritecharacter:", error);
    }
  };

  const getFavoritiesCharacters = () => {
    const charactersFromRealm = realm.objects<Result>("FavoriteCharacter");
    setfavorities(charactersFromRealm);

   
  };

  useEffect(() => {
    getFavoritiesCharacters();
  }, []);

  return {
    saveitemForFavorite,
    deleteItemById,
    favorities,
    getFavoritiesCharacters
  };
}
