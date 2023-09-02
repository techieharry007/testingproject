import { View, Text } from 'react-native'
import React from 'react'
import AppButton from '../utils/appButton'

const LandingPage = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <AppButton title={'Sign Up'} onPress={()=>navigation.navigate('Login',{flag:true})}/>
        <AppButton title={'Login'} onPress={()=>navigation.navigate('Login')}/>
      </View>
    </View>
  )
}

export default LandingPage