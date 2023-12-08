import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TemporaryScreen from '../screens/TemporaryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlantScreen from '../screens/PlantScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
/*       <NavigationContainer> */
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} />
            <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
            <Stack.Screen name="Temp" options={{headerShown:false}} component={TemporaryScreen} />
            <Stack.Screen name="Profile" options={{headerShown:false}} component={ProfileScreen} />
            <Stack.Screen name="Plants" options={{headerShown:false}} component={PlantScreen} />
            <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterScreen} />
            <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
           
          </Stack.Navigator>
/*         </NavigationContainer> */
      );
    }

export default AppNavigation;