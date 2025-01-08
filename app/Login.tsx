import { View, Text, StyleSheet, SafeAreaView, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Firebase_auth } from '../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const auth = Firebase_auth;

    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, username, password)
            alert("Sign in success")
        }catch(err){
            alert("Sign in failed")
        }
    }

    const signUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth, username, password)
            alert("Sign up success")
        }catch(err){
            alert("Sign up failed")
        }
    }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <KeyboardAvoidingView behavior="padding">
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            secureTextEntry={true}
          />

          {loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : (
            <>
              <Button
                title="Login"
                onPress={async () => {
                  setLoading(true);
                  try {
                    signIn();
                  } catch (err) {
                    alert(err);
                  }
                  setLoading(false);
                }}
              />
              <Button
                
                title="Sign up"
                onPress={async () => {
                  setLoading(true);
                  try {
                    signUp();
                  } catch (err) {
                    alert(err);
                  }
                  setLoading(false);
                }}
              />
            </>
          )}
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    text:{
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
    },
    input:{
        height: 50,
        marginVertical:4,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        
    },
    
})

export default Login