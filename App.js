//React
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

//React Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Fonts & Icons
import { useFonts } from 'expo-font'
import Ionicons from '@expo/vector-icons/Ionicons'
import AppLoading from 'expo-app-loading';

//Screens
import Home from './screens/Home'
import Hadith from './screens/Hadith';
import Dowa from './screens/Dowa';
import Header from './components/Header';



const App = () => {
  
      const [loaded] = useFonts({
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })
  
    if (!loaded) {
      return <AppLoading />;
    }
  
  const Tab = createBottomTabNavigator();

 

  
  return (
    <SafeAreaProvider>
      
    <NavigationContainer>

        <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: '#00abf4',
          },
          headerTintColor: '#fff',

                 tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Hadith') {
              iconName = focused ? 'library' : 'library-outline';
            } else if (route.name === 'Dowa') {
              iconName = focused ? 'albums' : 'albums-outline';}

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00ABF4',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Hadith" component={Hadith}/>
          <Tab.Screen name="Dowa" component={Dowa}/>
        </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  
});


export default App;