import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import logo from './logo.png';

const Title = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Landing');
    }, 2000);
  });
  return (
    <View
      style={{
        alignItems: 'center',
        paddingVertical: '35%',
        paddingHorizontal: '10%',
        margin: '2%',
        backgroundColor: '#FF731D',
        borderRadius: 15,
      }}>
      <View
        style={{
          marginTop: 40,
          marginBottom: 20,
        }}>
        <Logo />
      </View>

      <Text
        style={{
          fontSize: 30,
          color: 'white',
          fontWeight: 'bold',
        }}>
        Fruitify
      </Text>
    </View>
  );
};

const Logo = () => {
  return (
    <Image
      source={logo}
      style={{
        width: 200,
        height: 200,
      }}
    />
  );
};

export default Title;