import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import MainScreen from './Components/MainScreen';

// function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!!!</Text>
//     </View>
//   );
// }

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  }
});

export default createAppContainer(AppStackNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
