import { DrawerToggleButton } from '@react-navigation/drawer';
import { router, Stack, useNavigation } from 'expo-router'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {

  const navigation = useNavigation();

  const onHeaderLeftClick = ( canGoBack: boolean ) => {
    if (canGoBack) {
     router.back();
      return
    }
    
    navigation.dispatch(DrawerActions.toggleDrawer());
    
  }

  return (
    // si hicieramos las options en el stack, se aplicarian a todos los screens
    <Stack screenOptions={{
      animation: 'slide_from_left',
      // headerShown: false, // para que no se muestre el header en todos los screens
      // headerShadowVisible: false, // para que no se muestre la sombra del header
      statusBarStyle: 'dark',
      contentStyle: {
        backgroundColor: 'white', // color del fondo de la pantalla
      },  
      headerLeft: ({ tintColor, canGoBack }) => <Ionicons name={canGoBack ? 'arrow-back' : 'grid-outline'} size={24} className='mr-2' color={tintColor} canGoBack={canGoBack} onPress={() => onHeaderLeftClick(canGoBack as boolean)} />,
    }}>
      <Stack.Screen name='home/index'  options={{ title: 'Inicio' }} />
      <Stack.Screen name='products/index'  options={{ title: 'Productos', animation: 'slide_from_right' }} />
      <Stack.Screen name='profile/index' options={{ title: 'Perfil', animation: 'slide_from_bottom' }} />
      <Stack.Screen name='settings/index' options={{ title: 'Ajustes' }} />
    </Stack>
 );
}

export default StackLayout