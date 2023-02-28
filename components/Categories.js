import { View, Text ,ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  
  return (
    
    <ScrollView  
    showsHorizontalScrollIndicator={false}
    horizontal>
      <CategoryCard text="one"/>
      <CategoryCard text="two"/>
      <CategoryCard text="three"/>
      <CategoryCard text="three"/>
      <CategoryCard text="three"/>
      <CategoryCard text="three"/>
      <CategoryCard text="three"/>
    </ScrollView>
  )
}

export default Categories