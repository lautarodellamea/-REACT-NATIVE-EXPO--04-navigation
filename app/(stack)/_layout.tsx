import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    // si hicieramos las options en el stack, se aplicarian a todos los screens
    <Stack screenOptions={{
      animation: 'slide_from_left',
      // headerShown: false // para que no se muestre el header en todos los screens
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
}

export default StackLayout