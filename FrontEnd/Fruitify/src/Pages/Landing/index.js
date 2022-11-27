import React from 'react';
import {View, Text, Image} from 'react-native';
import {ActionButton} from '../Atomic';
import logo from '../Title/logo.png';

const Landing = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderWidth: 5,
        borderColor: '#8CC0DE',
        backgroundColor: '#EFEAD8',
        paddingVertical: '5%',
        borderRadius: 10,
        margin: '2%',
      }}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          fontFamily: 'sans-serif-condensed',
          color: '#FF6464',
        }}>
        Welcome to Fruitify
      </Text>
      <Logo />
      <View
        styes={{
          marginTop: 20,
        }}>
        <ActionButton
          desc="Already Have an Account?"
          title="Login"
          onPress={() => handleGoTo('Login')}
        />
        <ActionButton
          desc="No ? Register Here"
          title="Register"
          onPress={() => handleGoTo('Register')}
        />
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
        marginBottom: '20%',
        marginTop: '10%',
      }}
    />
  );
};

export default Landing;
