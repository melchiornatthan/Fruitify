import React from 'react';
import {View, Text, Image} from 'react-native';
import { ActionButton } from '../Atomic';
import logo from '../Title/logo.png'

const Landing = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '10%',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color:'#0D4C92',
        }}>
        Welcome to Fruitify
      </Text>
      <Logo/>
      <View styes={{
            marginTop: 20,
      }}>
        <ActionButton desc="Already Have an Account?" title="Login" onPress={() =>handleGoTo('Login')}/>
        <ActionButton desc="No ? Register Here" title="Register" onPress={() =>handleGoTo('Register')}/>
        </View>
    </View>
  );
};



const Logo = () => {
  return (
    <Image
      source={logo}
      style={{
        width: 150,
        height: 150,
        marginBottom : "20%",
        marginTop: "10%"
      }}
    />
  );
};


export default Landing;
