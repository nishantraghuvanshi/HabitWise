import { View, Text, Image } from 'react-native'
import React from 'react'

const WelcomePage = () => {
  return (
    <View>
      <Image source={require('../assets/jog2d.png')} />
      <Image source={require('../assets/Ellipse-2.png')} />
    </View>
  )
}

export default WelcomePage