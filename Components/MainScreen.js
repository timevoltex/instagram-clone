import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import{ createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import HomeTab from './AppTabNavigator/HomeTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: {screen:HomeTab},
  SearchTab: {screen:SearchTab},
  AddMediaTab: {screen:AddMediaTab},
  LikesTab: {screen:LikesTab},
  ProfileTab: {screen:ProfileTab},
})
const AppTabContent = createAppContainer(AppTabNavigator);

export default class App extends Component{
  static navigationOptions = {
    headerLeft: () => <Icon name='ios-camera' style={{paddingLeft:10}}/>,
    title:'Instagram',
    headerRight: () => <Icon name='ios-send' stlye={{paddingRight:10}}/>
  }
  render(){
    return(
      <>
      <AppTabContent/>
      {/* <View style={styles.container}>
        <Text>MainScreen..</Text>
      </View> */}
      </>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
  }
})