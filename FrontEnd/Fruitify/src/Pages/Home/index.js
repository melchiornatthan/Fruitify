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
import Info from './info';
import Apple from './apple.png';
import Orange from './orange.png';
import Banana from './banana.png';

const Home = ({navigation}) => {
  const [imageCamera, setImageCamera] = React.useState(null);
  const [details, setDetails] = useState(0);
  
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
        const data = response.assets[0];
        setImageCamera(data);
        console.log(data);
        navigation.navigate('Result', {
          uri : data.uri,
          type : data.type,
           name : data.fileName,
         });
      }
    })
  }
  const requestGalleryPermission = async () => {
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
        openGallery();
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  const openGallery = () => {
    const option = {
      mediaType: 'photo',
      quality : 1,
    }
    
    launchImageLibrary(option, (response) => {console.log('Image picker error');
      if(response.didCancel){
        console.log('User cancelled image picker');
      }else if(response.errorCode){
        console.log('Image picker error', response.errorMessage);
      }else{
        const data = response.assets[0];
        setImageCamera(data);
        console.log(data);
        navigation.navigate('Result', {
          uri : data.uri,
          type : data.type,
           name : data.fileName,
         });
      }
    })
  }


 

  return (
    <SafeAreaView>
      <ScrollView>
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
         onPress={requestGalleryPermission}
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
      <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            paddingLeft: 20,
            paddingVertical: 10,
            fontFamily: 'sans-serif-condensed',
            color: '#395144',
          }}>
          Take A Look At Your Fruit Nutritions!
        </Text>
      <View style={{
        flexDirection: 'row',
        marginHorizontal: '2%',
        marginVertical: '10%',
        height: 80,
      }}>
        <Pressable 
        onPress= {() => setDetails(1)}
         style={{
          
          backgroundColor: '#E5D9B6',
          flex : 1,
          margin:4,
          borderRadius: 10,
         }}
        ><ImgageIcon file={Apple}/></Pressable>
        <Pressable 
        onPress= {() => setDetails(2)}
         style={{
          backgroundColor: '#E5D9B6',
          flex : 1,
          margin:4,
          borderRadius: 10,
         }}
        ><ImgageIcon file={Banana}/></Pressable>
        <Pressable 
        onPress= {() => setDetails(3)}
         style={{
          backgroundColor: '#E5D9B6',
          flex : 1,
          margin:5,
          borderRadius: 10,
         }}
        ><ImgageIcon file={Orange}/></Pressable>
        
      </View>
      <View>
        {details == 1 &&<View style={{
          borderColor: '#FF731D',
          borderWidth: 5,
          margin: '5%',
          borderRadius: 15,
        }}>
        <Info fruit="Apple" c="Vitamin C: 9.2mg" protein="Protein: 0.5g" pottasium="Potassium: 214mg" magnesium="Vitamin A: 6mcg"/>
      </View> }

      {details == 2 &&<View style={{
          borderColor: '#FF731D',
          borderWidth: 5,
          margin: '5%',
          borderRadius: 15,
        }}><Info fruit="Banana" c="Vitamin C: 10.3mg" protein="Protein: 1.3g" pottasium="Potassium: 422mg" magnesium="Magnesium: 31.9mg"/>
        </View> }
        
        {details == 3 &&<View style={{
          borderColor: '#FF731D',
          borderWidth: 5,
          margin: '5%',
          borderRadius: 15,
        }}>
        <Info fruit="Orange" c="Vitamin C: 82.7mg" protein="Protein: 1.3g" pottasium="Potassium: 232mg" magnesium="Calcium: 60.2mg"/>
      </View>}
      
      </View>
      </ScrollView>
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
        marginVertical: '25%',
      }}
    />
  );
};

const ImgageIcon = (props) => {
  return (
    <Image
      source={props.file}
      style={{
        width: 30,
        height: 30,
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
