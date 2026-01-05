// import {  Text, View } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Redirect } from 'expo-router';
const index = () => {
  return (

    <Redirect href='/(stack)/home'/> 

    // el safe area lo ponemos por pantalla y no en el layout por si quisieramos algun diseño que ocupe todo el espacio
    // <SafeAreaView>
    //   <View className='pl-4'>
    //     {/* dos formas de usar las fuentes */}
    //     <Text className='text-3xl text-primary' style={{ fontFamily: 'WorkSans-Black' }}>index</Text>
        
    //     <Text className='text-3xl text-secondary font-work-black'>index</Text>
    //     <Text className='text-3xl text-secondary-100 font-work-medium'>index</Text>
    //     <Text className='text-3xl text-secondary-200 font-work-light'>index</Text>
    //     <Text className='text-3xl font-work-light'>index</Text>
    //     <Link href='/products'>Products</Link>
    //  </View>
    // </SafeAreaView>
  )
}

export default index