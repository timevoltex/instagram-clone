import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';

export default class AddMediaTabTab extends Component{
  render(){
    return(
      <View style={styles.container }>
        <Text>AddMediaTabTab</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between'
  }
})