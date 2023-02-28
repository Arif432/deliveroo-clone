import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import FeaturedCard from './FeaturedCard'
import {ArrowRightIcon} from "react-native-heroicons/outline"

const Featured = ({title,desc}) => {
  return (
    <View>
        <View className="flex-row px-4 mt-4 justify-between items-center">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon size={32} color="#00CCBB"/>
        </View>

        <Text className="text-gray-400 text-sm px-4">{desc}</Text>

        <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal>
            <FeaturedCard
            id={123}
            imgUrl={"../assets/food4.jpeg"}
            title={"Pizza"}
            rating={4.5}
            genre={"fast food"}
            address={"multan"}
            shortDesc={"test description"}
            dishes={[]}
            long={20}
            lat={10}
            />
         
            <FeaturedCard
            id={123}
            imgUrl={"../assets/food4.jpeg"}
            title={"Pizza"}
            rating={4.5}
            genre={"fast food"}
            address={"multan"}
            shortDesc={"test description"}
            dishes={[]}
            long={20}
            lat={10}
            />

            <FeaturedCard
            id={123}
            imgUrl={"../assets/food4.jpeg"}
            title={"Pizza"}
            rating={4.5}
            genre={"fast food"}
            address={"multan"}
            shortDesc={"test description"}
            dishes={[]}
            long={20}
            lat={10}
            />
        </ScrollView>
    </View>
  )
}

export default Featured