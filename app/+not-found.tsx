import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar las pantallas
import Login from './Login';
import UsuariosAdd from './UsuariosAdd';
import EmpresasAdd from './EmpresasAdd';
import Home from './Home';
import Busqueda from './Busqueda';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Configurar las rutas para cada pantalla */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UsuariosAdd" component={UsuariosAdd} />
        <Stack.Screen name="EmpresasAdd" component={EmpresasAdd} />
        <Stack.Screen name="Busqueda" component={Busqueda} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}