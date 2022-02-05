import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTextStyle}>tasbih</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    headerStyle : {
        marginTop : 40,
    },
    headerTextStyle : {
        fontFamily : 'roboto-regular',
        fontWeight : 'bold',
        fontSize : 30,
        padding : 10,
        color : '#333333',
        textTransform : 'uppercase'
    }
});
export default Header;

