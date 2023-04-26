import React from 'react'
import { TextInput } from 'react-native'
import { darkGrey } from './Constants'

const Field = () => {
  return (
    <TextInput 
    style={{borderRadius:10,
            paddingHorizontal:10,
            color:darkGrey,
            width:'80%',
            height:40,
            backgroundColor:'rgb(220,220,220)',
            alignItems:'center',
            marginVertical:10}}
            placeholder='Username'
            placeholderTextColor="#3A3B3C"
            >
    </TextInput>
  )
}

export default Field
