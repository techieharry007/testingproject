import {View, Text} from 'react-native';
import React from 'react';
import {Color} from './Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({navigation, name}) => {
  return (
    <View
      style={{
        backgroundColor: Color.theme,
        height: 80,
        justifyContent: 'center',
      }}>
      <View
        style={{
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons name="menu" size={25} color={'white'} onPress={()=>navigation.toggleDrawer()}/>
        <Text style={{fontSize: 25, color: 'white'}}>{name}</Text>
        <MaterialCommunityIcons name="menu" size={25} color={Color.theme} />
      </View>
    </View>
  );
};

export default Header;
