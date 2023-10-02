import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useMemo } from "react";

interface IsFavoriteProps {
  onPress: () => void;
  isFavorite: boolean | undefined;
}
export default function IsFavoriteComp({
  isFavorite,
  onPress,
}: IsFavoriteProps) {
  const validatorState = useMemo(() => {
    const isFavoriteValidator = isFavorite
      ? require("../../assets/isFavorite.png")
      : require("../../assets/isNotFavorite.png");

      return isFavoriteValidator
  }, [isFavorite]);
  return (
    <TouchableOpacity style={{ marginLeft: 12, justifyContent: "center" }} onPress={()=> onPress()}>
      <Image source={validatorState} style={{ width: 20, height: 20 }} />
    </TouchableOpacity>
  );
}
