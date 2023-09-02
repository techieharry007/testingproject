import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  Platform,
  TextInput,
  ImageBackground,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native-elements';
// import {TextInput} from 'react-native-gesture-handler';
// import { color } from 'react-native-elements/dist/helpers'
import {KeyboardAvoidingView} from 'react-native';
import {Color} from '../utils/Colors';
import AppButton from '../utils/appButton';
import {CommonActions} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {authToken, errroHandler} from '../store/Authmodule/login_slice';
import {locationsData} from '../utils/fake';
//   import { useDispatch,useSelector } from 'react-redux';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');
const Login = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {fontScale} = useWindowDimensions();
  const styles = style(fontScale);
  const [margin, setMargin] = useState(true);
  const [backPress, setbackPress] = useState(0);
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPass: '',
  });
  const [loader, setLoader] = useState(false);
  const [flag, setFlag] = useState(false);
  const {errMsg,error} = useSelector(state => state.login);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goBack();
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);
  const handleLogin = () => {
    if (!user.username || !user.password) {
      dispatch(errroHandler({flag: true, msg: 'Fields are required'}));
      setTimeout(() => {
        dispatch(errroHandler({flag: false, msg: ''}));
      }, 5000);
    } else {
      let data=locationsData.filter(val => {
        return val.email.includes(user.username);
      })
      if (
       data?.length
      ) {
        dispatch(authToken({flag: true,data:data[0]}));
      }
      else{
        dispatch(errroHandler({flag: true, msg: 'User dose not exist'}));
      setTimeout(() => {
        dispatch(errroHandler({flag: false, msg: ''}));
      }, 5000);
      }
    }
  };

  const handleSignUp = () => {
    if (!user.username || !user.password || !user.confirmPass) {
      dispatch(errroHandler({flag: true, msg: 'Fields are required'}));
      setTimeout(() => {
        dispatch(errroHandler({flag: false, msg: ''}));
      }, 5000);
    } else {
      let data=locationsData.filter(val => {
        return val.email.includes(user.username);
      })
      if (
       data?.length
      ) {
        dispatch(authToken({flag: true,data:data[0]}));
      }
      else{
        dispatch(errroHandler({flag: true, msg: 'User dose not exist'}));
      setTimeout(() => {
        dispatch(errroHandler({flag: false, msg: ''}));
      }, 5000);
      }
    }
  };
  return (
    <>
      <StatusBar backgroundColor={'transparent'} />

      <View
        style={{
          flex: 1,
          backgroundColor: Color.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={require('../../src/assests/test2.jpg')}
          resizeMode="cover"
          style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              borderTopStartRadius: 70,
              height: height / 1.5,
              backgroundColor: '#fff',
              top: '20%',
            }}>
            <KeyboardAvoidingView
              style={{}}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on platform
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  // height:500,
                  // position:'absolute',
                  top: 50,
                }}>
                <TextInput
                  style={styles.input}
                  placeholder="username..."
                  placeholderTextColor={'gray'}
                  value={user.username}
                  onChangeText={e => setUser({...user, username: e})}
                />
                {error && (
                  <Text style={{color: 'red', fontSize: 15}}>*{error}</Text>
                )}
                <TextInput
                  style={styles.input}
                  placeholder="password..."
                  placeholderTextColor={'gray'}
                  value={user.password}
                  onChangeText={e => setUser({...user, password: e})}
                />
                {error && !error.includes("User dose not exist") &&  (
                  <Text style={{color: 'red', fontSize: 15}}>*{error}</Text>
                )}
                {route.params?.flag && (
                  <TextInput
                    style={styles.input}
                    placeholder="confirm password..."
                    placeholderTextColor={'gray'}
                    value={user.password}
                    onChangeText={e => setUser({...user, password: e})}
                  />
                )}

                {/* {errMsg && <Text style={styles.errTxt}>* {errMsg}</Text>} */}
                <AppButton
                  onPress={() => handleLogin()}
                  touch={{width: '78%', alignSelf: 'center'}}
                  title={'Login'}
                  btn={{}}
                  // loading={loading}
                />
                {/* <TouchableOpacity onPress={() => console.log('first')}>
                  <Text style={styles.txt}>Forgot password?</Text>
                </TouchableOpacity> */}
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Login;
const style = fontScale =>
  StyleSheet.create({
    input: {
      color: 'black',
      width: width / 2,
      padding: 5,
      fontSize: 16 / fontScale,
      color: 'black',
      backgroundColor: Color.white,
      borderWidth: 0.5,
      borderRadius: 15,
      marginVertical: 5,
      width: 250,
      paddingLeft: 10,
    },
    txt: {
      fontSize: 16 / fontScale,
      color: Color.white,
      textAlign: 'center',
      // width:250,
      fontWeight: '600',
      // padding:5
    },
    loginTxt: {
      fontSize: 30 / fontScale,
      color: Color.theme,
      fontWeight: '700',
      paddingLeft: 5,
    },
    errTxt: {
      fontSize: 14 / fontScale,
      color: 'red',
    },
  });
