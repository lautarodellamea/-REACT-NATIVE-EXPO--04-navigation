import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { products } from 'store/products.store';

const ProductScreen = () => {

  const navigation = useNavigation();

  const params = useLocalSearchParams();
  console.log({ params })
  
  const product = products.find((product) => product.id === params.id);

  useEffect(() => {
    if (product) {
      navigation.setOptions({
        title: product.title,
      });
      console.log({ product });
    }
  }, [product, navigation]);

  if (!product) {
    // return <Text>Producto no encontrado</Text>
    return <Redirect href='/' />
  }
  
  
  return (
    <View>
      <Text className='text-2xl font-bold'>{product?.title}</Text>
      <Text className='text-sm text-gray-500'>{product?.description}</Text>
      <Text className='text-lg font-bold'>{product?.price}</Text>
    </View>
  )
}

export default ProductScreen