import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#25292e" />
    <View style={styles.container}>
      <Text style={styles.text}>Навигация</Text>
      <Link href="/about" style={styles.button} component={TouchableOpacity}>
        <Text style={styles.buttonText}>Обо мне</Text>
      </Link>
      <Link href="/languages" style={styles.button} component={TouchableOpacity}>
        <Text style={styles.buttonText}>Мои языки программирования</Text>
      </Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#333', 
    textAlign: 'center',
  },
});