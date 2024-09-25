import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar las pantallas
import Login from '../screens/Login';
import UsuariosAdd from '../screens/UsuariosAdd';
import EmpresasAdd from '../screens/EmpresaAdd';
import Busqueda from '../screens/Busqueda';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UsuariosAdd" component={UsuariosAdd} />
        <Stack.Screen name="EmpresasAdd" component={EmpresasAdd} />
        <Stack.Screen name="Busqueda" component={Busqueda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}