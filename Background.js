import React from 'react'
import { View,ImageBackground,StyleSheet } from 'react-native'

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground style={{height :"100%"} }/>
      
      <View style= {{position:"absolute"}}>
        {children}
      </View>

      </View>
  )
}

export default Background
