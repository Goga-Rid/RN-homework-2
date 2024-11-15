import React from 'react';
import { Text } from 'react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#95d0c2',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#95d0c2',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
       }}>
      <Tabs.Screen name="index" options={{ 
        headerShown: false,
        title: 'Главная',
        tabBarIcon: () => (
            <Text style={{ fontSize: 25 }}>🏠</Text> 
        ), 
        }} />
      <Tabs.Screen name="about" options={{
         title: 'Обо мне',
         tabBarIcon: () => (
            <Text style={{ fontSize: 25 }}>👨🏻‍💻</Text>
         )  
         }} />
      <Tabs.Screen name="languages" options={{
         title: 'Языки программирования',
         tabBarIcon: () => (
            <Text style={{ fontSize: 25 }}>💻</Text>
         )  
         }}  />
    </Tabs>
  );
}