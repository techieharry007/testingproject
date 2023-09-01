import { View, Text, Image,StyleSheet, Pressable,PermissionsAndroid, Modal } from 'react-native'
import React, { useState,useEffect } from 'react'
import Header from '../utils/header'
import ImagePicker from "react-native-image-crop-picker";

const Profile = ({navigation},props) => {
  const [profileImg,setProfileImg]=useState("")
  const [isVisible,setIsVisible]=useState(false)
//requesting camera permission from user
  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "App needs camera permission",
          }
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        return false;
      }
    } else return true;
  };

//requesting storage  permission from user

  const requestExternalWritePermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "External Storage Write Permission",
            message: "App needs write permission",
          }
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
      }
      
  }
}
  //getting image from Camera

  const handleChoosePhoto = async () => {
    requestCameraPermission()
    setIsVisible(false);
    // setModal(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      setProfileImg(image.path);
    });
  };
  //getting image from local storage

  const selectPhotoFromStorage = () => {
    requestExternalWritePermission()
    setIsVisible(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then((image) => {
      setProfileImg(image.path)
    });
  };
  
  
  return (
    <View style={{flex:1}}>
        <Header name={"Profile"} navigation={navigation}/>
        <View style={{marginTop:15,justifyContent:"center",alignItems:"center"}}>
          <Pressable onPress={()=>{setIsVisible(!isVisible)}}>

          {!profileImg ? <Image style={{width:150,height:150,borderRadius:75,alignSelf:"center"}} source={require("../../src/assests/demo1.png")}/>: <Image style={{width:150,height:150,borderRadius:75,alignSelf:"center"}} source={{uri:profileImg}}/>}
          </Pressable>
          <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingVertical:10}}>
            <Text style={[style.commonTxt,{opacity:0.5}]}>Tap to change image </Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingVertical:10}}>
            <Text style={style.commonTxt}>Name : </Text>
            <Text style={style.commonTxt}>Harry</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingVertical:10}}>
            <Text style={style.commonTxt}>Phone : </Text>
            <Text style={style.commonTxt}>94856222555</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingVertical:10}}>
            <Text style={style.commonTxt}>Address : </Text>
            <Text style={style.commonTxt}>East West</Text>
          </View>
        </View>
        <Modal visible={isVisible} animationType="slide"
              transparent={true}
              style={{position:"relative"}}
              >
          <View style={{flexDirection:"column",justifyContent:"flex-start",alignItems:"center",borderRadius:10,backgroundColor:"lightgray",height:200,position:"absolute",top:250,left:35,right:0,width:300}}>
            <View style={{backgroundColor:'#fff',padding:10,paddingHorizontal:15,marginTop:10}}>
              <Pressable onPress={handleChoosePhoto}>

              <Text style={style.commonTxt}>Take Photo</Text>
              </Pressable>
            </View>
            <View style={{backgroundColor:'#fff',padding:10,paddingHorizontal:15,marginTop:10}}>
              <Pressable onPress={selectPhotoFromStorage}>

              <Text style={style.commonTxt}>Choose From Storage</Text>
              </Pressable>
            </View>
            <Pressable onPress={()=>setIsVisible(!isVisible)} style={{backgroundColor:'#fff',padding:10,paddingHorizontal:15,marginTop:10}}>
              <Text style={style.commonTxt}>Cancel</Text>
              </Pressable>
          </View>
        </Modal>
    </View>
  )
}

export default Profile
const style=StyleSheet.create({
  commonTxt:{
    fontSize:18,
    color:"#000"
  }
})