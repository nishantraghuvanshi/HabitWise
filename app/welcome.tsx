import { View, Text, Button } from 'react-native'
import React from 'react'
import WelcomePage from '../components/welcomePage'

const Welcome = () => {
  return (
    <View>
      <WelcomePage />
      <Button title="Get Started" onPress={() => console.log('Login')} />
    </View>
  )
}

export default Welcome