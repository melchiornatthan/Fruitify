import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import logo from './logo.png';

const Title = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Landing');
        },2000);
    });
  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 160,
        margin: 20,
        backgroundColor: '#1E5128',
        borderRadius: 25,
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
          width: 100,
          height: 100,
        }}
      />
    );
  };

export default Title;
