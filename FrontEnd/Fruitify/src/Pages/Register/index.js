import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { TextInput} from 'react-native-gesture-handler';
import {  ActionButtonLR } from '../Atomic';

const Register = () => {
  return (
    <View
      style={{
        marginTop: "10%",
        alignItems: 'center',
        backgroundColor: '#D6E4E5',
        paddingVertical: "10%",
        borderRadius: 25,
        marginHorizontal: "10%",
      }}
      >
      
      <Text style={{
            fontSize: 30,
            color: '#F49D1A',
            marginBottom: 20,
            fontWeight: 'bold',
      }}>Register</Text>
      <View style={{
        width: "80%",
      }}>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <ActionButtonLR title="Register" onPress={() => alert("Hello")} />
        </View>
        </View>
  );
};


const Input = props => {
  return (
    <View style={{
        paddingVertical: 5,
    }}>
      <TextInput style={styles.input} placeholder={props.placeholder} />
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
