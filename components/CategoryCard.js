import { View, Text,TouchableOpacity ,Image } from 'react-native'
import React from 'react'

const CategoryCard = ({text}) => {
  return (
    <TouchableOpacity className="p-2">
        <Image 
            className="w-20 h-20"
            source={require("../assets/food1.jpeg")} />
        <Text className="text-white font-bold absolute bottom-1 left-1">{text}</Text>

    </TouchableOpacity>
  )
}

export default CategoryCard