import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

const TabsLayout = () => {
  return (
    <>
      <StatusBar style='dark' />
      <Tabs screenOptions={{ 
        tabBarActiveTintColor: 'purple', 
        // tabBarShowLabel: false // para que no se muestre el label de la tab bar
        headerShown: true, // mostrar header en todos los screens
        headerStyle: {
          //  backgroundColor: 'purple',
        },
        // tabBarStyle: {
        //   backgroundColor: 'black',

        // }

      }}>
        <Tabs.Screen
          name="(stack)"
          options={{  
            title: 'Stack',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="person-outline" color={color} />,
            headerShown: false, // ocultar header en el stack (se maneja internamente)
          }}
        />
        <Tabs.Screen
          name="home/index"
          options={{  
            title: 'Inicio',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="favorites/index"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
          }}
        />
      </Tabs>
    
      
    </>

  )
}

export default TabsLayout