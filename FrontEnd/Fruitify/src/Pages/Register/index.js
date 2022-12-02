import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import {ActionButtonLR} from '../Atomic';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      .post('http://10.10.56.34:1337/api/auth/local/register', data)
      .then(res => {
        console.log(res);
        handleGoTo('Login')
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView
    style={{
      flex:1,
    }}>
   
   <View
      style={{
        margin:'3%',
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#FF731D',
        padding:'3%',
        borderRadius: 15,
       
      }}>
        <Text
          style={{
            fontSize: 35,
            color: '#F49D1A',
            marginBottom: '50%',
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
    </SafeAreaView>
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
