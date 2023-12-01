import {StyleSheet, View, Text, StatusBar, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='back' onPress={()=>  navigation.navigate('Login')}></Button>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  loginBox:{
    flex:1,
    width:350,
    height:350,
    borderRadius:30,
    alignItems: 'center',
    marginTop:-200,
  },
  inputBox:{
    flex:1,
    justifyContent: 'center',
  },
  inputText:{
    marginBottom:10,
    marginTop:30,
    fontSize:20,
    fontFamily:'Nunito-Regular'
  },
  input:{
    backgroundColor:"white",
    padding:10,
    width:300,
    height:45,
    borderRadius:30
  },

});