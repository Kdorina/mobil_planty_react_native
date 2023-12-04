/* rnf alapot adja meg */
import {Button, Image, SafeAreaView, TextInput } from 'react-native'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
/* import { useFonts } from 'react-native-google-fonts'; */

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
  <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#f9c2ff','#dcd964',]} style={{flex:1}}>
    <SafeAreaView style={styles.container}>
    <Image source={require('../assets/leaf.png')} style={{marginBottom:-60, flex:1,justifyContent: 'center',width:100,resizeMode:'contain'}}/>
    <Text style={{fontSize:45, fontWeight:'bold',flex:1, margin:0}}>Bejelentkezés</Text>
      <View style={styles.loginBox}>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Email cím</Text>
            <TextInput placeholder="Email" style={styles.input}></TextInput>
            <Text style={styles.inputText}>Jelszó</Text>
            <TextInput placeholder="Jelszó" style={styles.input}></TextInput>
          </View>
        
      </View>
      <View style={{flex:1, alignItems:'center'}}>
        <View style={{backgroundColor:'#ffff', padding:10, marginTop:0, borderRadius:50, width:200}}>
            <Button title='Bejelentkezés' color='#01c0cc' onPress={() => navigation.navigate('Temp')}></Button>
        </View>
        <View  style={{marginTop:20 , fontWeight:'bold'}}>
          <Button title='Nincs még fiókod? Regisztrálj itt.' color='#01c0cc' onPress={()=> navigation.navigate('Register')}></Button>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  </LinearGradient>
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
    marginTop:-250,
  },
  inputBox:{
    flex:1,
    justifyContent: 'center',
  },
  inputText:{
    marginBottom:10,
    marginTop:20,
    fontSize:20,
  },
  input:{
    backgroundColor:"white",
    padding:10,
    width:300,
    height:45,
    borderRadius:30
  },

});