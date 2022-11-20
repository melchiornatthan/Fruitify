import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ActionButton = ({desc, title, onPress}) => {
  return (
    <View
      style={{
        marginTop: '3%',
        marginHorizontal: '5%',
      }}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const ActionButtonHome = ({desc, title, onPress}) => {
  return (
    <View
      style={{
        marginHorizontal: '5%',
        marginBottom: '5%',
      }}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const ActionButtonLR = ({desc, title, onPress}) => {
  return (
    <View
      style={{
        marginTop: 20,
        alignContent: 'center',
      }}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  wrapper: {
    component: {
      backgroundColor: '#0D4C92',
      borderRadius: 25,
      paddingVertical: 10,
    },
  },
  text: {
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#EFF5F5',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    desc: {
      fontSize: 17,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 20,
    },
  },
};

export {ActionButton, ActionButtonLR, ActionButtonHome};
