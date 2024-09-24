import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { auth, createUserWithEmailAndPassword } from './firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore();
export default function RegistroEmpresa({ navigation }) {
    const [nombreEmpresa, setNombreEmpresa] = useState('');
    const [tipoEmpresa, setTipoEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contacto, setContacto] = useState('');

    const handleRegistro = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
    
