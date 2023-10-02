import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/presentation/screens/HomeScreen';
import { RealmProvider } from './src/data/services/localServices/realm';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/infractucture/navigation/HomeStack';


export default function App() {
  return (
    <NavigationContainer>
   <RealmProvider>
   
     <HomeStack/>
   
    
   </RealmProvider>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
