import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'

export default function Btn ({bgColor,btnLabel,textColor}) {
  
    return (
        <TouchableOpacity style = {{
        backgroundColor : bgColor,
        borderRadius:100,
        alignItems:"center",
        width:280,
        paddingVertical:7,
        marginVertical:10,
        margin:20,
        marginBottom:10
        }}>
          <Text style = {{color:textColor, fontSize:22,fontWeight:"bold"}}>{btnLabel}</Text>
        </TouchableOpacity>
    )
  
}

