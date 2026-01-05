import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from 'components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'

// este home es tomado como el nuevo index porque ignora los parentesis (se los saque porque se pueden dar problemas si tengo dos carpetas con parentesis) y es el primer index que encuentra
const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  }

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} className='flex-1'>
      <View className='px-10 pt-4'>

        <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/products')}>
          Productos
        </CustomButton>

        <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/profile')}>
          Perfil
        </CustomButton>

        <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/settings')}>
          Configuración
        </CustomButton>

        
        <CustomButton color='primary' className='mb-2' onPress={ onToggleDrawer }>
          Abrir Menu
        </CustomButton>

        {/* podemos hacerlo mediante un Link */}
        <Link href='/products' asChild>
          <CustomButton color='primary' >
            Productos
          </CustomButton>
        </Link>



       {/*  <Text className='text-2xl font-bold mb-5'>HomeScreen</Text>
        <Link className='mb-5' href='/products'>Products</Link>
        <Link className='mb-5' href='/profile'>Profile</Link>
        <Link className='mb-5' href='/settings'>Settings</Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen