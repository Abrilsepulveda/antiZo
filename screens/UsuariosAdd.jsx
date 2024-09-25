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

        return (
            <View style={styles.container}>
              <Image source={require('./assets/logo.png')} style={styles.logo} />
              <Text style={styles.title}>WorkMap</Text>
        
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellidos"
                value={apellidos}
                onChangeText={setApellidos}
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
                value={contraseña}
                onChangeText={setContraseña}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Número de contacto"
                value={contacto}
                onChangeText={setContacto}
                keyboardType="phone-pad"
            />
        <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegistroEmpresa')}>
        <Text style={styles.switchText}>Registrarse como Empresa</Text>
      </TouchableOpacity>
    </View>
  );
}
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
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 30,
      },
      input: {
        width: '100%',
        padding: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
      },
      button: {
        width: '100%',
        backgroundColor: '#A4E168',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      switchText: {
        color: '#000',
        marginTop: 15,
        textDecorationLine: 'underline',
      },
    });
