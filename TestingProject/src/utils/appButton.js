import {
    View,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    StyleSheet,
    Platform,
    Dimensions,
    ActivityIndicator,
    Pressable
  } from 'react-native';
  import React, { useState } from 'react';
  import { Color } from './Colors';
  const {width} = Dimensions.get('window');
  const AppButton = ({textStyle, btn, touch, onPress, title, btnText,loading}) => {
    const {fontScale} = useWindowDimensions();
    const styles = style(fontScale);
    const [pt,setT]=useState(false)
    return (
      <View style={{width}}>
        <Pressable
          style={[
            styles.touchStyle,
            {...touch}
          ]}
          onPress={onPress}
          onPressIn={()=>setT(!pt)}
          onPressOut={()=>setT(!pt)}
          >
          <View style={[styles.viewStyle,{...btn},{ borderBottomWidth:!pt?7:3,
        borderColor:"#97DCF2"}]}>
            {loading? <ActivityIndicator color={color.white} size={'small'}/>: <Text style={[styles.btnTxt, {...btnText}]}>{title}</Text>}
          </View>
        </Pressable>
      </View>
    );
  };
  
  export default AppButton;
  const style = fontScale =>
    StyleSheet.create({
      btnTxt: {
        color: Color.white,
        fontSize: 16 / fontScale,
        textAlign: 'center',
      },
      touchStyle: {
        paddingVertical: 10,
        width: '100%',
      
      },
      viewStyle: {
        width: '90%',
        borderRadius: 15,
        backgroundColor: Color.theme,
        paddingVertical: 10,
        alignSelf: 'center',
       
      },
    });
  