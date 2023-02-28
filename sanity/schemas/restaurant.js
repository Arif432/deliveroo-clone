import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name:"name",
      type :"string",
      title : "Restaurant Name",
      validation : (rules) => rules.required()
    },
    {
      name: "short_description",
      type : "string",
      title : "Short Description",
      validation : (rule) => rule.max(200)
    },
    {
      name : "image",
      type : "image",
      title : "Image of Restaurant"
    },
    {
      name : "lat",
      type : "number",
      title : "Latidude of Restaurant"
    },
    {
      name : "long",
      type : "number",
      title : "longitude of Restaurant"
    },
    {
      name: "address",
      type : "string",
      title : "address of restaurant",
      validation : (rule) => rule.required()  
    },
    {
      name : "rating",
      type : "number",
      title : "Enter Rating from 1-5",
      validation : (rules) => rules.required()
                              .min(1)
                              .max(5)
                              .error("please enter a num between 1-5")
    },
    {
      name:"type",
      type :"string",
      title :"Category",
      validation : (rule) => rule.required(),
      // maybe from given catg or add new catg (confirm)
      type :"reference",
      to : [{type : "category"}]
    },
    {
      name :"dishes",
      type : "array",
      title :"Dishes",
      of : [{type:"reference" , to :[{type : "dish" }] }]
    }


  ]
})
