import React, { useEffect } from 'react'

import { Slot, SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import '../global.css';
import { useFonts } from 'expo-font';

// Esto ha que el sppash se muestre hasta que se carguen las fuentes
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
  })

  useEffect(() => {
    if (error) {
     throw error;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);


  if (!fontsLoaded && !error) {
    return null;
  }

  
  return (
     <Stack screenOptions={{
      animation: 'slide_from_left',
      headerShown: false, // para que no se muestre el header en todos los screens
      // headerShadowVisible: false, // para que no se muestre la sombra del header
      statusBarStyle: 'dark',
      contentStyle: {
        backgroundColor: 'white', // color del fondo de la pantalla
     }
    }}>
      <Stack.Screen name='home/index' options={{ title: 'Inicio' }} />
      <Stack.Screen name='products/index'  options={{ title: 'Productos', animation: 'slide_from_right' }} />
      <Stack.Screen name='profile/index' options={{ title: 'Perfil', animation: 'slide_from_bottom' }} />
      <Stack.Screen name='settings/index' options={{ title: 'Ajustes' }} />
    </Stack>
  );
};

export default RootLayout;
