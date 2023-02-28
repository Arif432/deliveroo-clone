import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name : "name",
      type : "string",
      title : "Name of Dish",
      validation : (rule) => rule.required()
    },
    {
      name : "short_description",
      type : "string",
      title : "Short Description",
      validation : (rule) => rule.max(200)
    },
    {
      name :"price" ,
      type :"number",
      title :"price in pkr"
    },
    {
      name :"image",
      type :"image",
      title :"Image of Dish"
    }
  ]
})
