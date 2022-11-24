import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActionButtonHome, ImageButton} from '../Atomic';
import logo from '../Title/logo.png';
import {useState} from 'react';
import user from './user.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Home = ({navigation}) => {
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
        <ActionButtonHome title="Scan Now" />
        <ActionButtonHome
          title="History"
          onPress={() => handleGoTo('History')}
        />
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
        marginVertical: '25%',
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
