/* rnf alapot adja meg */
import {SafeAreaView } from 'react-native'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  return (
  <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#54c0cc','#dcd964',]} style={{flex:1}}>
    <SafeAreaView style={styles.container}>
      <View style={styles.loginBox}>
        <Text>LoginScreen</Text>
        <StatusBar style="auto" />
      </View>
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
    backgroundColor:'white',
    width:400,
    height:600
  },

});