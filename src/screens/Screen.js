import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default Screen = () => (
  <View style={{flex: 1, backgroundColor: '#34495e'}}>
    <StatusBar barStyle="light-content" />
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#fff',
          height: 300,
          width: '90%',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#7f58ff',
          shadowOffset: {height: 10},
          shadowOpacity: 0.4,
          elevation: 10,
        }}>
        <Text style={{color: '#7f8c8d', fontWeight: 'bold', fontSize: 17}}>
          Press the "Plus button" below to see output
        </Text>
        <Icon
          name="arrow-down"
          size={25}
          color="#7f8c8d"
          style={{marginTop: 20}}
        />
      </View>
    </View>
  </View>
);
