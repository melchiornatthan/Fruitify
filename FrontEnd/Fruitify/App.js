import React from 'react';
import {View, Text, Image} from 'react-native';
import logo from './logo.png';

const App = () => {
  return (
    
      <View
        style={{
          alignItems: 'center',
          padding: 20,
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
            fontSize: 50,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Fruitify
        </Text>
      </View>
    
  );
};

const styles = {
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
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

export default App;
