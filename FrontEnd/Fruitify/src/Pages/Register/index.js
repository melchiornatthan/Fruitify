import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {ActionButtonLR} from '../Atomic';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const submit = () => {
//     const data = {
//       username,
//       password,
//     };
//     axios.post('http://10.0.2.2/data', data)
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

  return (
    <View
      style={{
        marginTop: '10%',
        alignItems: 'center',
        backgroundColor: '#D6E4E5',
        paddingVertical: '10%',
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
            placeholder="Password"
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
        {username.length > 0 && password.length > 0 && (
        <ActionButtonLR title="Register" />
        )}
      </View>
    </View>
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

export default Register;
