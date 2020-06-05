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
import ColorPaletteModal from './components/ColorPaletteModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();


const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} 
      options={{
          headerStyle:
          {
            backgroundColor: '#282C34',
          },
          headerTintColor:'white'
        }}/>
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName,headerStyle:{backgroundColor: '#282C34',},headerTintColor:'white' })}
      />
    </MainStack.Navigator>
  );
};



const App= () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen name="Main" component={MainStackScreen} 
        options={{ headerShown : false}}
        />
          <RootStack.Screen name="ColorPaletteModal" component={ColorPaletteModal} 
        options={{ headerShown : false}}
        />
     </RootStack.Navigator>
    </NavigationContainer> 
  );
};



export default App;
