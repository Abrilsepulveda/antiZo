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

            <MapView style={styles.map} />

            <FlatList
                data={trabajos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={styles.card}>
                    <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{item.nombre}</Text>
                        <Text style={styles.cardSubtitle}>{item.ubicacion}</Text>
                        <Text style={styles.cardDistance}>{item.distancia} min left</Text>
                    </View>
                </View>
                )}
            />

        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },

    searchInput: {
        marginTop: 50,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    
    map: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1, 
    },

    card: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 2,
    },

    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
      },

});
  