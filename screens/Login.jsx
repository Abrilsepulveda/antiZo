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

