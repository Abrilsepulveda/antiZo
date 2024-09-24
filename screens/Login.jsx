import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; 


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
}


const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario logueado:', user.email);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>WorkMap</Text>
      <Text style={styles.subtitle}>Tu trabajo ideal, a un click de distancia</Text>

      <TextInput
        style={styles.input}
        placeholder="correo@gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>recuperar contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('./assets/google.png')} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Continuar con Google</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.registerText}>Registrarse</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Al hacer clic en Continuar, aceptas nuestras Condiciones de servicio y Política de privacidad
      </Text>
    </View>
  );


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFFFA6',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
  
    },
    logo: {
      width: 80,
      height: 80,
      marginBottom: 20,
    },
  