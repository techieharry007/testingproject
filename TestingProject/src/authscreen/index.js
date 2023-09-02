import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import Login from '../authscreen/login';
import LandingPage from '../authscreen/landingPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AuthModule = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LandingPage"
          component={LandingPage}
        />
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthModule;
