import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { products } from 'store/products.store'

const ProductsScreen = () => {
  return (
    <View className='flex flex-1 '>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id} // para que cada item tenga un id unico, esto es para que react pueda identificar el item
        renderItem={({ item }) => (
          <View className='p-4'>
            <Text className='text-2xl font-bold'>{item.title}</Text>
            <Text className='text-sm text-gray-500'>{item.description}</Text>
           
            <View className='flex flex-row items-center justify-between mt-2'>
              <Text className='text-lg font-bold'>{item.price}</Text>
              <Link href={`/products/${item.id}`}>
                <Text className='text-sm text-blue-500'>Ver detalles</Text>
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;