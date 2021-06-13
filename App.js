import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{headerShown:false}}>
          <Stack.Screen
            name='Home' component={HomeScreen}
          />
          <Stack.Screen
            name='Iss Location' component={IssLocationScreen}
          />
          <Stack.Screen
            name='Meteors' component={MeteorScreen}
          />
          <Stack.Screen
            name='Updates' component={UpdateScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

export default App;
