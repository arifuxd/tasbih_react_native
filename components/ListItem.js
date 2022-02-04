import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const ListItem = ({text, navigation}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.listStyle}>
      <Text style={styles.listTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listStyle : {
    borderBottomWidth : 1,
    borderBottomColor : '#ccc',
    padding : 15,
    backgroundColor : '#fff'
  },
  listTextStyle : {
    fontFamily : 'roboto-regular',
    fontSize : 17

  }
});
