import { View, Text, Button } from 'react-native'
import React from 'react'
import WelcomePage from '../components/welcomePage'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: '50%',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10, 
  },
  heading:{
    fontSize: 24,
    fontWeight: 'bold',
  }
})

const Welcome = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <WelcomePage />
      <Text style={styles.heading}>Track your active lifestyle</Text>
      <Text>Master your habits, Transform your life</Text>
      <View style={styles.button}>
        <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  )
}
export default Welcome