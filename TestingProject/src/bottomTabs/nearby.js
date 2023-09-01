import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../utils/header';
import {locationsData} from '../utils/fake';
const Nearby = ({navigation}) => {
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Convert degrees to radians
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }
  const lat = 30.7512;
  const long = 76.7949;
  const [list, setList] = useState([]);
  useEffect(() => {
    let arr = [];
    locationsData.forEach((val, i) => {
      let dist = calculateDistance(lat, long, val.lat, val.long);
      arr.push({...val, dist1: dist});
    });
    let sortedArr = arr.sort(function (a, b) {
      var x = a['dist1'];
      var y = b['dist1'];
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setList(sortedArr);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header name={'Near By'} navigation={navigation}/>
      <FlatList
      contentContainerStyle={{paddingVertical:10}}
        data={list.slice(0, 5)}
        renderItem={({item, index}) => {
          return (
            <View style={style.container}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text style={style.title}>{item?.name}</Text>
                <Text style={style.subTxt}>{item?.email}</Text>
                <Text style={style.subTxt}>{item?.address}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Nearby;
const style = StyleSheet.create({
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: '700',
    paddingVertical: 2,
  },
  subTxt: {
    fontSize: 18,
    color: 'black',
    paddingVertical: 5,
  },
  container: {
    paddingHorizontal: 15,
    marginTop: 8,
    backgroundColor: '#fff',
    elevation: 5,
    width: '95%',
    alignSelf: 'center',
    borderRadius:10,

  },
});
