import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import Counter from './components/Counter';
const App = () => {
  const [count, setCount] = useState(0)
 

  // const [loaded] = useFonts({
  //   'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  //   'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  // })

  // if (!loaded) {
  //   return <AppLoading />;
  // }

  const increment = async () => {
   
    try {
      await AsyncStorage.setItem('count', JSON.stringify(count+1))
     setCount(count+1)
    } catch (e) {
      alert(e)
    }
    
  }


    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('count')
        if (jsonValue != null) {
          setCount(JSON.parse(jsonValue))
          console.log(JSON.parse(jsonValue))
        }
      } catch(e) {

        console.log(e)      
      }


    }  
    useEffect(()=>{
      getData()
    }, [])

  
  


  const reset = () => {
    setCount(0)
  }

  return (
    <View style={styles.container}>
      <Header />
      <Counter count={count} setCount={setCount} />
      <TouchableOpacity activeOpacity={0.8} style={styles.incrementbtn} onPress={increment}>
        <Text style={styles.incrementText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.resetBtn} onPress={reset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  incrementbtn: {
    marginTop: 80,
    marginBottom : 40,
    backgroundColor: '#00ABF4',
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
  incrementText: {
    color: '#fff',
    // fontFamily: 'roboto-regular',
    fontSize: 60
  },
  resetBtn: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#909090',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  resetText : {
    color : '#fff',
    fontSize : 25,
    // fontFamily : 'roboto-regular',
  },

});


export default App;