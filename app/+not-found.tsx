import './gesture-handler';

import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import UsuariosAdd from '../screens/UsuariosAdd';
import EmpresaAdd from '../screens/EmpresaAdd';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function NotFoundScreen() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
       
        <Stack.Screen name="Login usuarios" component={UsuariosAdd} />
        <Stack.Screen name="Login empresas" component={EmpresaAdd} />
        
      </Stack.Navigator>
    );
    
  }

  return (
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>
  )
};
