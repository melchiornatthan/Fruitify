import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Landing, Title, Register, Login, Home, History} from '../Pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Title"
        component={Title}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
      />
    </Stack.Navigator>
  );
};

export default Router;
