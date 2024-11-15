import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerTintColor: '#95d0c2', }}>
       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
       <Stack.Screen name="+not-found" />
    </Stack>
  );
}
