import { View, Text } from 'react-native'
import React from 'react'
import DrawerTabs from '../drawerCmp'
import AuthModule from '../authscreen'
import { useSelector } from 'react-redux'

const RootNavigation = () => {
  const {auth}=useSelector(state=>state.login)
// console.log("====>>",auth)
  return (
    <View style={{flex:1}}>
      {auth? <DrawerTabs/>
      :<AuthModule/>}
    </View>
  )
}

export default RootNavigation