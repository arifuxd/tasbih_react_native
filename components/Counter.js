import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator'

const Counter = ({count, setCount}) => {
  console.log(count)
  
  return (
    <View style={styles.counter}>
      <CircularProgress
      radius={130}
      value ={count}
      textColor='#222'
      fontSize={60}
      inActiveStrokeColor='#00ABF4'
      inActiveStrokeOpacity={0.2}
      duration={100}
      activeStrokeColor='#00ABF4'
      
      />
    </View>
  );
};


const styles = StyleSheet.create({
  counter : {
    marginTop : 30
  }
});

export default Counter;

