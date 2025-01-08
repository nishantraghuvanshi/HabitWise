import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/Login';
import list from './app/list';
import React from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Firebase_auth } from './firebaseConfig';
import details from './app/details';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator screenOptions={{headerShown: false}}>
      <InsideStack.Screen name="list" component={list} />
      <InsideStack.Screen name="details" component={details} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user,setUser] = React.useState<User | null>(null)

  React.useEffect(() => {
    onAuthStateChanged(Firebase_auth, (user)=>{
      setUser(user)
    })
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        {user ? (
          <Stack.Screen name="InsideLayout" component={InsideLayout} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
