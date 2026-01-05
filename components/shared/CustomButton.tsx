import { Text, Pressable, PressableProps } from 'react-native'

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
}


const CustomButton = ({ children, color = 'primary', onPress, className }: Props) => {

  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];

  return (
    <Pressable className={`p-4 rounded-md ${btnColor} active:opacity-90 ${className}`} onPress={onPress} >
      <Text className='text-white text-center'> {children}</Text>
    </Pressable>
  )
}

export default CustomButton