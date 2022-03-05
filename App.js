import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator  from './BottomTabNavigator';
export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <BottomTabNavigator/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
