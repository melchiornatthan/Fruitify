import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {ActionButtonLR} from '../Atomic';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  const submit = () => {
   
      const data = {
        identifier : username,
        password : password,
      };
      axios
        .post('http://10.10.56.34:1337/api/auth/local', data)
        .then(res => {
          console.log(res);
          AsyncStorage.setItem('token', res.data.jwt);
          navigation.navigate('Dashboard');
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
          backgroundColor: '#EFEAD8',
          borderWidth: 2,
          borderColor: '#FF731D',
          padding:'3%',
          borderRadius: 15,
         
        }}>
        <Text
          style={{
            fontSize: 40,
            color: '#F49D1A',
            marginBottom: '70%',
            fontFamily: 'sans-serif-condensed',
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#5F9DF7',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#020202',
  },
});

export default Login;
