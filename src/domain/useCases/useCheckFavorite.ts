import { View, Text } from "react-native";
import React from "react";
import { Result } from "../../data/models/RicksResults";
import { useRealm } from "../../data/services/localServices/realm";
import useFavoritesCallbacks from "./useFavoritesCallbacks";

interface useCheckFavoriteprops {
  setCharacters: React.Dispatch<React.SetStateAction<Result[] | null>>;
}
export default function useCheckFavorite({
  setCharacters,
}: useCheckFavoriteprops) {
    const realm = useRealm()
    const {saveitemForFavorite,deleteItemById} = useFavoritesCallbacks()
    /// function for modified object to favorite item
    const handleFavoriteToggle = async (characterId: number, ) => {
        realm.write(() => {
          const characterToUpdate = realm.objectForPrimaryKey('Character', characterId);
          if (characterToUpdate) {
            characterToUpdate.isFavorite = !characterToUpdate.isFavorite;
            if (characterToUpdate.isFavorite) {
              // Agregar a la colección de favoritos
              saveitemForFavorite(characterToUpdate);
            } else {
            
              deleteItemById(characterId);
            }
          }
        });
      
        const updatedCharacters = realm.objects('Character');
        setCharacters(updatedCharacters);
      };
      
      
      

        



  return {
    handleFavoriteToggle
  };
}
