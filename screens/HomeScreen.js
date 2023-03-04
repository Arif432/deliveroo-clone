import { View, Text ,Image, TextInput, ScrollView} from 'react-native'
import React , { useEffect,useState  ,useLayoutEffect}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '../components/Categories';
import Featured from "../components/Featured"
import sanityClient from "../sanity";


import {
    ChevronDownIcon,Bars3Icon,
    UserIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"

const HomeScreen = () => {

    const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "featured"] {
          ...,
          restaurants[]->{
          ...,
          dishes[] ->
        }
      }
    `)
    .then((data) => {
      setFeaturedCategories(data);
    })
}, []);

   console.log("categories",featuredCategories);
  return (
    
    <SafeAreaView className="flex-1 pb-4">

        <View className="bg-white pb-2 px-4">

            <View className="flex-row pb-2 space-x-2 items-center pt-2">

                {/* image */}
                <Image source={require('../assets/deliveroo.png')}
                    className="w-10 h-10 p-4 rounded-full"/>

                {  /* flex-1 takes all space */}
                {/* texts */}
                <View className="flex-1">
                    <Text className="text-gray-400">Deliver Now !</Text>

                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={18} color="#00CCBB"/>
                    </Text>
                </View>

                {/* user icon */}
                <UserIcon size={35} color="#00CCBB" />
            </View>


            {/* seacrh and icons */}
            <View className="flex-row pb-2 items-center">

                {/* search and glass */}
                    <View className="items-center flex-1 flex-row bg-gray-200 p-2 space-x-2">
                        <MagnifyingGlassIcon size={20} color="gray"/>
                        <TextInput placeholder='search destination'/>
                    </View>

                    {/* 3bars */}
                    <Bars3Icon color="#00CCBB"/>
            </View>

        </View>

        {/* vertical scrollView our the screen */}
        <ScrollView className="bg-gray-100">
            <Categories/>

            {featuredCategories?.map((catg)=>{
              const {name,short_description,_id} = catg
              return(
                <Featured 
                key={_id}
                id={_id}
                title ={name}
                description = {short_description}
                />
            )
            })}
            

            {/* <Featured 
            description="eat like spending zero"
            title="Tasty Discount"/>
            
            <Featured 
            description="why not support your local hotel tonight"
            title="Offers near you"/> */}

        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen