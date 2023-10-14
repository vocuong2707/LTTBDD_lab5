import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Screen1 from './Components/Screen1' 
import Screen2 from './Components/Screen2' 
import Navigation from './Routes/Navigation'
export default function App() {
  return (
    // <Screen1/>
    // <Screen2></Screen2>
    <Navigation/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
