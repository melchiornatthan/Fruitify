import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {ActionButtonLR} from '../Atomic';
import axios from 'axios';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  const submit = () => {
    const data = {
      username : username,
      password : password,
      email : email,
    };
    axios
      .post('http://10.10.54.212:1337/api/auth/local/register', data)
      .then(res => {
        console.log(res);
        handleGoTo('Login')
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#EFEAD8',
      }}>
      <View
        style={{
          marginTop: '10%',
          alignItems: 'center',
          height: '80%',
          backgroundColor: '#FFFFFF',
          borderWidth: 2,
          borderColor: '#FF731D',
          paddingTop: '10%',
          paddingBottom: '20%',
          borderRadius: 15,
          marginHorizontal: '10%',
        }}>
        <Text
          style={{
            fontSize: 35,
            color: '#F49D1A',
            marginBottom: 20,
            fontFamily: 'sans-serif-condensed',
            fontWeight: 'bold',
          }}>
          Register
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
              placeholder="Email"
              value={email}
              onChangeText={value => setEmail(value)}
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
          {username.length > 0 && password.length > 0 && email.length > 0 && (
            <ActionButtonLR title="Register" onPress={submit} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#5F9DF7',
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#020202',
  },
});

export default Register;
