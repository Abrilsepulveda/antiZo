import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import UsuarioAdd from '../app/usuarios/components/usuarioAdd';
import EmpresaAdd from '../app/usuarioEmpresa/components/EmpresaAdd';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'UUUUUY!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Esta pantalla no existe</Text>
        <UsuarioAdd onAdd={undefined}></UsuarioAdd>
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
