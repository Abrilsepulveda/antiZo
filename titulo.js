import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola soy abril</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alingItems: 'center',
        marginHorizontal: 50, 
    } ,
    homeScreenFilname:{
        marginVertical: 7,
    },
  });