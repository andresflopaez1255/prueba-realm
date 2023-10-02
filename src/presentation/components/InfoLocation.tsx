import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import useGetDateTime from '../../domain/useCases/useGetDateTime'
import AnimatedClock from './AnimatedClock'

export default function InfoLocation() {
    const {dateTime} = useGetDateTime()

  return (
    <View style={{paddingHorizontal:8, flexDirection:"row", justifyContent:"space-between", marginTop:40}}>
     
        <Text style={styles.text}>
            {dateTime?.city}
        </Text>
        <Text style={styles.text}>
            {dateTime?.datetime.date}
        </Text>
        <AnimatedClock dateTime={dateTime}/>
    
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
      },
});