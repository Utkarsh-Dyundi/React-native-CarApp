import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Carlist from "./Components/Carlist/Carlist"
export default function App() {
  return (
    <View style={styles.container}>
      <Carlist /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    //justifyContent: 'center',
  },
 
});
