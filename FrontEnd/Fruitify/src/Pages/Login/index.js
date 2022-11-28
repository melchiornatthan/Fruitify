import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {ActionButtonLR} from '../Atomic';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  const submit = () => {
   
      // const data = {
      //   identifier : username,
      //   password : password,
      // };
      // axios
      //   .post('http://10.10.54.212:1337/api/auth/local', data)
      //   .then(res => {
      //     console.log(res);
          handleGoTo('Home')
        // })
        // .catch(err => {
        //   console.log(err);
        // });
    
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#c',
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
            fontSize: 40,
            color: '#F49D1A',
            marginBottom: 20,
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
    </ScrollView>
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
