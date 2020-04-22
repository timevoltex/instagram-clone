import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'native-base';

export default class App extends Component{
  static navigationOptions = {
    headerLeft: () => <Icon name='ios-camera' style={{paddingLeft:10}}/>,
    title:'Instagram',
    headerRight: () => <Icon name='ios-send' stlye={{paddingRight:10}}/>
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>MainScreen..</Text>
      </View>
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