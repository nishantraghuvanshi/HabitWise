import { View, Text, Button } from 'react-native'
import React from 'react'
import { Firebase_auth } from '../firebaseConfig'
import WelcomePage from '../components/welcomePage'

const List = ({navigation}: any) => {
  return (
    <View>
        <Text>List</Text>
        <Button title="Go to Details" onPress={()=>navigation.navigate('details')} />
        <Button title="Logout" onPress={()=>Firebase_auth.signOut()} />
        
    </View>
  )
}

export default List