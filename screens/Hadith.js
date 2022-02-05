import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const HadithDetails = ({navigation, route}) => {

  console.log(route.params)

  return(
    <ScrollView >
    <Text>{route.params.hadithArabic}</Text>
    <Text>{route.params.hadithBengali}</Text>
    </ScrollView>
)
}




const HadithVerseDetails = ({navigation, route}) => {
    const [hadithData, sethadithData] = useState([])

      useEffect(()=>{
    fetch(`https://alquranbd.com/api/hadith/bukhari/${route.params.chSerial}`)
    .then(res => res.json())
    .then(data => sethadithData(data))
  }, [])


  return(
    <FlatList
    data={hadithData}
    renderItem={({item})=>{
      return (
    <TouchableOpacity activeOpacity={0.5} style={styles.listStyle} onPress={()=> navigation.navigate('hadithdetails', item)}>
    <Text style={styles.listTextStyle}>{item.topicName}</Text>
    </TouchableOpacity>
      )
      
    }}
    />
  )
}

const AllHadith = ({navigation}) => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://alquranbd.com/api/hadith/bukhari')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  return(
    <FlatList
    data={data}
    renderItem={({item})=>{
      return (
        <TouchableOpacity activeOpacity={0.5} style={styles.listStyle} onPress={()=> navigation.navigate('hadithversedetails', item)}>
        <Text style={styles.listTextStyle}>{item.nameBengali}</Text>
      </TouchableOpacity>
      )
      
    }}
    />
  )
}

const Hadith = () => {

  const Stack = createNativeStackNavigator()


  return (
    <Stack.Navigator>
      <Stack.Screen name='allhadith' component={AllHadith}/>
      <Stack.Screen name='hadithversedetails' component={HadithVerseDetails}/>
      <Stack.Screen name='hadithdetails' component={HadithDetails}/>
 

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
    
    fontSize : 17

  }
});
