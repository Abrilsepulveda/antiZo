import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { auth, createUserWithEmailAndPassword } from './firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore();
export default function RegistroEmpresa({ navigation }) {
    const [nombreEmpresa, setNombreEmpresa] = useState('');
    const [tipoEmpresa, setTipoEmpresa] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [contacto, setContacto] = useState('');

    const handleRegistro = () => {
        createEmailyPassword(auth, email, contraseña)
          .then(async (userCredential) => {
            const user = userCredential.user;
    
            await setDoc(doc(db, "empresas", user.uid), {
                nombreEmpresa: nombreEmpresa,
                tipoEmpresa: tipoEmpresa,
                email: email,
                contacto: contacto,
              });
      
              console.log('Empresa registrada con éxito');
              navigation.navigate('Home'); 
            })
            .catch(error => {
              console.error('Error al registrar la empresa:', error);
            });
        };

        return (
            <View style={styles.container}>
              <Image source={require('./assets/logo.png')} style={styles.logo} />
              <Text style={styles.title}>WorkMap</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre de la Empresa"
                value={nombreEmpresa}
                onChangeText={setNombreEmpresa}
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo de Empresa"
                value={tipoEmpresa}
                onChangeText={setTipoEmpresa}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setCotraseña}
                    secureTextEntry
                />
            <TextInput
                    style={styles.input}
                    placeholder="Número de contacto"
                    value={contacto}
                    onChangeText={setContacto}
                    keyboardType="phone-pad"
            />