/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';




import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack'

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette'

const Stack = createStackNavigator();

const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
          headerStyle:
          {
            backgroundColor: '#282C34',
          },
          headerTintColor:'white'
        }}
        />

        <Stack.Screen name="ColorPalette" component={ColorPalette}
           options={
             ({route}) => ({title: route.params.paletteName,headerStyle:{backgroundColor: '#282C34',},headerTintColor:'white'})   
          }
        />
     </Stack.Navigator>
    </NavigationContainer> 
  );
};



export default App;
