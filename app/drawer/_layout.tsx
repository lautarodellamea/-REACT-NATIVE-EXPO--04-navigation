import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import CustomDrawer from 'components/shared/CustomDrawer'

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawer}
        screenOptions={{
          headerShown: false,
          // overlayColor: 'red',
          drawerStyle: {
            backgroundColor: 'white',
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerItemStyle: {
            borderRadius: 10,
            
          },
          drawerActiveTintColor: 'purple',
          headerLeft: () => <DrawerToggleButton tintColor='purple' />,
        }}
      >
        <Drawer.Screen 
          name='tabs' 
          options={{ 
            drawerLabel: 'Tabs + Stack', 
            title: 'Tabs + Stack',
            drawerIcon: ({ color, size }) => (<Ionicons name='grid' size={size} color={color} />),
          }} 
        />
        <Drawer.Screen 
          name='user/index' 
          options={{ 
            drawerLabel: 'Usuario', 
            title: 'Usuario',
            drawerIcon: ({ color, size }) => (<Ionicons name='person' size={size} color={color} />),
          }} 
        />
        <Drawer.Screen 
          name='schedule/index' 
          options={{ 
            drawerLabel: 'Horarios', 
            title: 'Horarios',
            drawerIcon: ({ color, size }) => (<Ionicons name='calendar' size={size} color={color} />),
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerLayout