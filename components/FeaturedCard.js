import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {} from "react-native-heroicons/outline"
import {StarIcon, MapPinIcon} from "react-native-heroicons/solid"


const FeaturedCard = ({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDesc,
            dishes,
            long,
            lat,
        }) => {

  return (
    <TouchableOpacity className="p-2 bg-white shadow-sm mr-3">
        <Image 
            className="w-64 h-36 rounded-sm"
            source={require("../assets/food2.jpeg")} />

        <View  className="px-3 pb-4">
            <Text className="text-lg font-bold pt-2">{title}</Text>

            <View className="flex-row items-center space-x-1">
                <StarIcon opacity={0.5} size={20} color="green" className="items-center" />
                <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> .  
                    {genre}
                </Text>
            </View>

            <View className="flex-row items-center space-x-1">
                <MapPinIcon opacity={0.4} size={22} color="gray"/>
                <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
            
        </View>
    </TouchableOpacity>
  )
}

export default FeaturedCard