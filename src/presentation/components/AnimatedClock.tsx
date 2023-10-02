import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import useGetDateTime from "../../domain/useCases/useGetDateTime";
import { Properties } from "../../data/models/DateModel";

interface AnimatedClockProps {
  dateTime: Properties | null
}
const AnimatedClock = ({dateTime}:AnimatedClockProps) => {
  const [hour, setHour] = useState(Math.round(parseInt(dateTime?.datetime.hour_24_wolz!)));
  const [minute, setMinute] = useState(parseInt(dateTime?.datetime.minutes!));
  const animatedValueHour = new Animated.Value(hour);
  const animatedValueMinute = new Animated.Value(minute);

  useEffect(() => { 
      const newHour = parseInt(dateTime?.datetime.hour_24_wolz!);
   
      const newMinute =parseInt(dateTime?.datetime.minutes!);
      animateNumberChange(animatedValueHour, hour, newHour);
      animateNumberChange(animatedValueMinute, minute, newMinute);
      setHour(newHour);
      setMinute(newMinute);
 

  
  }, [dateTime]);

  const animateNumberChange = (
    animatedValue: Animated.Value | Animated.ValueXY,
    fromValue: number,
    toValue: number
  ) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 1000, // Duración de la animación en milisegundos
      useNativeDriver: false, // Necesario para animaciones de números
    }).start();
  };

  return (
    <View >
      <View style={styles.clock}>
        <Animated.Text style={styles.text}>
          {animatedValueHour.interpolate({
            inputRange: [0, 24],
            outputRange: ["00", "24"],
          })}
        </Animated.Text>
        <Text style={styles.separator}>:</Text>
        <Animated.Text style={styles.text}>
          {animatedValueMinute.interpolate({
            inputRange: [0, 59],
            outputRange: ["00", "59"],
          })}
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  clock: {
    flexDirection: "row",
  },
  text: {
    fontSize: 22,
  },
  separator: {
    fontSize: 22,
    marginHorizontal: 5,
  },
});

export default AnimatedClock;
