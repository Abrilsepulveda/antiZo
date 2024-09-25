import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { auth, createUserWithEmailAndPassword } from './firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore();

export default function RegistroEmpleado({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [contacto, setContacto] = useState('');

    const handleRegistro = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            await setDoc(doc(db, "empleados", user.uid), {
                nombre: nombre,
                apellidos: apellidos,
                email: email,
                contacto: contacto,
              });
              console.log('Empleado registrado con éxito');
              navigation.navigate('Home'); // Navegar a la pantalla de inicio o donde sea necesario
            })
            .catch(error => {
              console.error('Error al registrar el empleado:', error);
            });
        };
