import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActionButtonHome, ImageButton} from '../Atomic';
import logo from '../Title/logo.png';
import {useState} from 'react';
import user from './user.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { PermissionsAndroid } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Home = ({navigation}) => {
  const [imageCamera, setImageCamera] = React.useState(null);
    
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "App Camera Permission",
          message:"App needs access to your camera ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        openCamera();
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality : 1,
    }
    
    launchCamera(option, (response) => {console.log('Image picker error');
      if(response.didCancel){
        console.log('User cancelled image picker');
      }else if(response.errorCode){
        console.log('Image picker error', response.errorMessage);
      }else{
        const data = response.assets;
        setImageCamera(data);
        console.log(data);
      }
    })
  }



  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: '#F3EFE0',
          paddingHorizontal: '2%',
          paddingTop: '5%',
          paddingBottom: '5%',
          marginHorizontal: '2%',
          marginTop: '2%',
          borderWidth: 5,
          borderColor: '#FF731D',
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
          Welcome to Fruitify
        </Text>
        <Logo />
        {
          imageCamera != null && <Image source={{uri: imageCamera}} style={{width: 100, height: 100}}/>
        }
        
        
        <Pressable 
         onPress={requestCameraPermission}
         style={{
          height: 50,
          width: 150,
          padding: 10,
          backgroundColor: '#FF731D',
          alignSelf: 'center',
          borderRadius: 10,
          marginBottom: '5%',
         }}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>Camera</Text>
        </Pressable>
        <Pressable 
         onPress={openCamera}
         style={{
          padding: 15,
          backgroundColor: '#FF731D',
          alignSelf: 'center',
          borderRadius: 10,
          marginBottom: 10,
         }}
        >
          <Text style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}>Upload Image</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const Logo = () => {
  return (
    <Image
      source={logo}
      style={{
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginVertical: '20%',
      }}
    />
  );
};

const Item = ({firstName, lastName}) => {
  return (
    <View>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
    </View>
  );
};

export default Home;
