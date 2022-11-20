import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActionButtonHome} from '../Atomic';
import logo from '../Title/logo.png';
import {useState} from 'react';
import axios from 'axios';

const Home = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            backgroundColor: '#FFC600',
            paddingHorizontal: '5%',
            paddingVertical: '5%',
            margin: '5%',
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              alignSelf: 'center',
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
      </View>
    </SafeAreaView>
  );
};

const Logo = () => {
  return (
    <Image
      source={logo}
      style={{
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginVertical: '45%',
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
