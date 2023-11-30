import {SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { StyleSheet, View,Text, Image, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen() {
  return (
    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#54c0cc','#dcd964',]} style={{flex:1}}>
        <SafeAreaView style={styles.container}>
              <View style={{}}>
              <Image source={require('../assets/leaf.png')} style={{ justifyContent: 'center',width:350,resizeMode: 'contain'}}/>
              <Text style={styles.mainText}>Planty</Text>
              <Text style={styles.miniText}>Gondozd növényeidet,</Text>
              <Text style={styles.miniText}>követsd nyomon egészségüket</Text>
              </View>
              <View style={styles.bgButton}>
                <View style={{backgroundColor:'#ffff', padding:10, borderRadius:50, width:200}}>
                  <Button title='Tovább' color='#54c0cc' onPress={() => Alert.alert('Button pressed')}></Button>
                </View>
             
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
      height:'100',
     /*  alignItems: 'center', */
    /*   justifyContent: 'center', */
    },
    mainText:{
      textAlign:'left',
      marginLeft:20,
      fontWeight:"bold",
      fontSize:100,
    },
    miniText:{
      marginLeft:20,
      fontSize:20,
    },
    bgButton:{
      flex:1,
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
  