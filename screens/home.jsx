// Aca estoy importando las librerias necesarias para la pantalla del mapa 
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'; // Componentes de React Native
import MapView, { Marker } from 'react-native-maps'; // Mapa y marcador de React Native 
Maps

export default function MapScreen()  {
    // Defini la región inicial que mostrará el mapa, con coordenadas y zoom
    const initialRegion = {
      latitude: -34.603722, // Coordenada de latitud inicial
      longitude: -58.381592, // Coordenada de longitud inicial
      latitudeDelta: 0.0922, // Nivel de zoom en la latitud
      longitudeDelta: 0.0421, // Nivel de zoom en la longitud
    };
    return (
        //principal 
        <View style={styles.container}>
      {/* Componente MapView para mostrar el mapa */}
      <MapView
        style={styles.map} // Estilos del mapa para ocupar toda la pantalla
        initialRegion={initialRegion} // Configuramos la región inicial
      >
