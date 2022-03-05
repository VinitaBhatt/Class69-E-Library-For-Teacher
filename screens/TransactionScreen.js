import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TransactionScreen extends Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Transaction Screen</Text> 
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5653D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      color:"white",
      fontSize:30
  }
});