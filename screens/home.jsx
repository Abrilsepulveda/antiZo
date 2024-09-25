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
 {/* Defini un marcador que aparece en una ubicación específica */}
 <Marker
  coordinate={{ latitude: -34.603722, longitude: -58.381592 }} // Coordenadas del marcador
  title="Ubicación 1" // Título al hacer clic en el marcador
  description="Descripción de la ubicación" // Descripción que se muestra al hacer clic
/>
    <View>
      <Text>Home Screen</Text>
      <Button title="Add User" onPress={() => navigation.navigate('UsuariosAdd')} />
      <Button title="Add Company" onPress={() => navigation.navigate('EmpresasAdd')} />
      <Button title="Search" onPress={() => navigation.navigate('Busqueda')} />
    </View>

</MapView>
</View>

);
}
//  estilos de la pantalla y el mapa
const styles = StyleSheet.create({
    container: {
      flex: 1, // El contenedor ocupa toda la pantalla
    },
    map: {
        width: Dimensions.get('window').width, // Ancho del mapa igual al ancho de la pantalla
        height: Dimensions.get('window').height, // Alto del mapa igual al alto de la pantalla
      },
    });
