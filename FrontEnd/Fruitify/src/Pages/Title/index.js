import React, {useEffect} from 'react';
import {SafeAreaView, View,Text, Image} from 'react-native';
import logo from './logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Title = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 2000);
  });

  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem('token');
    if(dataToken){
      navigation.replace('Home');
    }else{
      navigation.replace('Landing');
    }
  };
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
        margin:'5%',
        backgroundColor: '#FF731D',
        borderRadius: 15,
      }}>
      <View>
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
    </SafeAreaView>
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
