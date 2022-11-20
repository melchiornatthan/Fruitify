import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {ActionButtonLR} from '../Atomic';
import axios from 'axios';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  const submit = () => {
    const data = {
      username,
      password,
    };
    axios
      .get('https://dummyjson.com/products/1')
      .then(res => {
        console.log(res);
        handleGoTo('Home');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#FFC600',
      }}>
      <View
        style={{
          marginTop: '10%',
          alignItems: 'center',
          height: '80%',
          backgroundColor: '#EFF5F5',
          paddingTop: '10%',
          paddingBottom: '20%',
          borderRadius: 25,
          marginHorizontal: '10%',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#F49D1A',
            marginBottom: 20,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <View
          style={{
            width: '80%',
          }}>
          <View
            style={{
              paddingVertical: 5,
            }}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={value => setUsername(value)}
            />
          </View>
          <View
            style={{
              paddingVertical: 5,
            }}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={value => setPassword(value)}
            />
          </View>

          {username.length > 0 && password.length > 0 && (
            <ActionButtonLR title="Sign In" onPress={submit} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 5,
    borderColor: '#A4BE7B',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#020202',
  },
});

export default Login;
