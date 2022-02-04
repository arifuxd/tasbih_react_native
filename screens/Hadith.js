import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ListItem = ({item, navigation}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.listStyle} onPress={()=> navigation.navigate('hadithversedetails', item)}>
      <Text style={styles.listTextStyle}>{item.nameBengali}</Text>
    </TouchableOpacity>
  );
};

const HadithVerseDetails = ({navigation, route}) => {
  
  const [hadithData, sethadithData] = useState([])
  useEffect(()=>{
    fetch(`https://alquranbd.com/api/hadith/bukhari/${route.params.chSerial}`)
    .then(res => res.json())
    .then(data => sethadithData(data))
  }, [])

  console.log(hadithData)

  return(
    <FlatList
    data={hadithData}
    renderItem={({item})=>{
      return (
    <TouchableOpacity activeOpacity={0.5} style={styles.listStyle} onPress={()=> navigation.navigate('hadithversedetails', item)}>
    <Text style={styles.listTextStyle}>{item.topicName}</Text>
    </TouchableOpacity>
      )
      
    }}
    />
  )
}

const HadithDetails = ({navigation}) => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://alquranbd.com/api/hadith/bukhari')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  console.log(data)

  return(
    <FlatList
    data={data}
    renderItem={({item})=>{
      return <ListItem navigation={navigation} item={item}/>
      
    }}
    />
  )
}

const Hadith = () => {

  const Stack = createNativeStackNavigator()


  return (
    <Stack.Navigator>
      <Stack.Screen name='hadithdetails' component={HadithDetails}/>
      <Stack.Screen name='hadithversedetails' component={HadithVerseDetails}/>
 

    </Stack.Navigator>
  );
};

export default Hadith;

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
