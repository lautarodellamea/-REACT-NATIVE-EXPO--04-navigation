import React, { useEffect } from 'react'

import { Slot, SplashScreen, Stack } from 'expo-router';
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

  
  return <Slot />;
  // cambiamos el slot por el stack para que se pueda usar el header
  // return <Stack/>
 };

export default RootLayout;
