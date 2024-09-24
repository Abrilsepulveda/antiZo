import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import firebase from '../firebase';

export default function BusquedaScreen() {
    const [trabajos, setTrabajos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
 
    useEffect(() => {
        // Obtener los datos de Firebase
        const fetchTrabajos = async () => {
          const trabajosSnapshot = await firebase.firestore().collection('trabajos').get();
          const trabajosData = trabajosSnapshot.docs.map(doc => doc.data());
          setTrabajos(trabajosData);
        };

        fetchTrabajos();
    }, []);
    
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar trabajo"
                value={busqueda}
                onChangeText={setBusqueda}
            />
        </View>
      );
}