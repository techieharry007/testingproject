import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');
const Container = props => {
  return (
    <View>
      <View style={{height: height}}>

        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{
            height: '100%',
          }}>
           <View
          style={style.container}>
              <Text style={{fontSize: 25, color: 'black'}}>Hi.. User</Text>
        </View>
          <View style={{paddingLeft: 12, marginTop: 2}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 40,
            width: '100%',
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity
            onPress={() => {
              // setModal(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingHorizontal: 30,
                alignItems: 'center',
              }}>
              <Entypo name="log-out" size={25} color={'black'} />
              <Text style={{fontSize: 18, color: 'black'}}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Container;
const style=StyleSheet.create({
 container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor:'white',
    height:100,
    justifyContent:"center",
    zIndex:1
  }
})