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