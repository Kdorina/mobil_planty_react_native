import {Button, Image, SafeAreaView, TextInput } from 'react-native'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
export default function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#ff7919','#DBFFAD']} style={{flex:1}}>
      <SafeAreaView style={styles.container}>
      <Image source={require('../assets/leaf.png')} style={{marginBottom:-70, flex:1,justifyContent: 'center',width:100,resizeMode: 'contain'}}/>
      <Text style={{fontSize:45, fontWeight:'bold',flex:1, margin:0}}>Regisztráció</Text>
        <View style={styles.loginBox}>
            <View style={styles.inputBox}>
              <Text style={styles.inputText}>Felhasználónév</Text>
              <TextInput placeholder="Felhasználó név" style={styles.input}></TextInput>
              <Text style={styles.inputText}>Email cím</Text>
              <TextInput placeholder="Email" style={styles.input}></TextInput>
              <Text style={styles.inputText}>Jelszó</Text>
              <TextInput placeholder="Jelszó" style={styles.input}></TextInput>
            </View>
          
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <View style={{backgroundColor:'#ffff', padding:10, marginTop:50, borderRadius:50, width:200}}>
              <Button title='Regisztráció' color='#54c0cc' onPress={() => navigation.navigate('Login')}></Button>
          </View>
          <View  style={{marginTop:20 , fontWeight:'bold'}}>
          <Button title='Van már fiókod? Jelentkezz be itt.' color='#01c0cc' onPress={()=> navigation.navigate('Login')}></Button>
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
      marginTop:-200,
    },
    inputBox:{
      flex:1,
      justifyContent: 'center',
    },
    inputText:{
      marginBottom:10,
      marginTop:20,
      fontSize:20,
      fontWeight:'500',

    },
    input:{
      backgroundColor:"white",
      padding:10,
      width:300,
      height:45,
      borderRadius:30
    },
  
  });