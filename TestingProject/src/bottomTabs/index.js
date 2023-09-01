import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from   "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'
import Profile from './profile';
import Nearby from './nearby';
const Tab=createBottomTabNavigator()
const BottomStack = ({navigation}) => {
  return (

    <Tab.Navigator initialRouteName='Profile' screenOptions={{headerShown:false}}>
      <Tab.Screen  
       options={{
        headerShown: false,
        tabBarLabel: "Profile",
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name="account"
            size={28}
            color={"dodgerblue"}
          />
        ),
      }}
      name="Profile" component={Profile} 
      initialParams={navigation={navigation}}
      />
      <Tab.Screen name="Nearby" 
      options={{
        headerShown: false,
        tabBarLabel: "Near By",
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name="earth"
            size={28}
            color={"dodgerblue"}
          />
        ),
      }}
      
      component={Nearby} 
      initialParams={navigation={navigation}}
      />
      {/* <Tab.Screen name='Drawer' component={}/> */}
    </Tab.Navigator>
  )
}

export default BottomStack