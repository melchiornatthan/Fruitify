import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Landing = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        Welcome to Fruitify
      </Text>
      <View styes={{
            marginTop: 20,
      }}>
        <ActionButton desc="Already Have an Account?" title="Login" />
        <ActionButton desc="No ? Register Here" title="Register" />
        </View>
    </View>
  );
};

const ActionButton = ({desc, title}) => {
  return (
    <View style={{
        marginTop: 20,
        alignContent: 'center',
    }}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={() => alert('Hello')} />
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
      color: '#497174',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 20,
    },
  },
};
export default Landing;
