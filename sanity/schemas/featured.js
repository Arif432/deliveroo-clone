import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured with Category Names',
  type: 'document',
   fields : [
    {
      name : "name",
      type : "string",
      title : "featured category name",
      validation : (rule) => rule.required()
    },
    {
      name : "short_description",
      type : "string",
      title : "Short Description",
      validation : (rule) => rule.max(200)
    },
    {
      name : "restaurants",
      type : "array",
      title : "restaurants",
      of : [{type : "reference" , to :[{type : "restaurant"}] }]
    }
   ]
})
