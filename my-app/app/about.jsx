import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Приветствую!😊</Text>
      <Text style={styles.paragraph}>
        Меня зовут Галеня Георгий, я изучаю React Native и нахожусь на 3 курсе в Хекслет Колледже
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95d0c2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    color: '#1e1816',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 20,
    color: '#1e1816',
    textAlign: 'center',
  },
});