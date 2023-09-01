import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../bottomTabs/profile';
import Nearby from '../bottomTabs/nearby';
import Container from './container';
import BottomStack from '../bottomTabs';
const Drawer=createDrawerNavigator()
const DrawerTabs = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator 
     screenOptions={{
      headerShown: false,
      drawerLabelStyle: {
      display:'none',
      },
      
    }}
    drawerContent={(props)=><Container {...props}/>}
    >
      <Drawer.Screen name="BottomStack" component={BottomStack} />
    </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerTabs