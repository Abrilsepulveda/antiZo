import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import UsuariosAdd from '../src/modules/login/personas/components/UsuariosAdd';
import EmpresaAdd from '../src/modules/login/empresas/components/EmpresaAdd';
import 'react-native-gesture-handler';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'UUUUUY!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Esta pantalla no existe</Text>
        <UsuariosAdd onAdd={undefined}></UsuariosAdd>
        <EmpresaAdd onAdd={undefined}></EmpresaAdd>
      
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Pantalla principal</Text>
        </Link>
      </View>
    </>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
