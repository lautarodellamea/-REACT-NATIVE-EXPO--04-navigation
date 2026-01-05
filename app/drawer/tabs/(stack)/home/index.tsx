import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import CustomButton from 'components/shared/CustomButton'

// este home es tomado como el nuevo index porque ignora los parentesis (se los saque porque se pueden dar problemas si tengo dos carpetas con parentesis) y es el primer index que encuentra
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>

        <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/drawer/tabs/(stack)/products')}>
          Productos
        </CustomButton>

        <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/drawer/tabs/(stack)/profile')}>
          Perfil
        </CustomButton>

        <CustomButton color='secondary' className='mb-2' onPress={() => router.push('/drawer/tabs/(stack)/settings')}>
          Configuración
        </CustomButton>

        {/* podemos hacerlo mediante un Link */}
        <Link href='/drawer/tabs/(stack)/products' asChild>
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