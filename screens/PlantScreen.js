import { View, Text, SafeAreaView, Button, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'


export default function PlantScreen() {
    const navigation = useNavigation(); 
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#D0F288' , width:'100%', alignItems:'center'}}>
        <View>
        <Button title='<My plants' onPress={()=> navigation.navigate('Home')}></Button>
        <Text style={{margin:20,fontSize:60, fontWeight:'bold', color:'#F8FFD2', marginBottom:-30}}>Fikusz</Text>
        <View style={{flexDirection:'row',zIndex:2, width:'100%', justifyContent:'space-around', marginTop:20}}>
            <View style={{width:120, height:400,marginVertical:30, borderRadius:20}}>
                <View style={{ height:'120%', width:'120%', position:'absolute'}}>
                    <Image source={require('../assets/plant.png')} style={{flex:1,width:300,resizeMode:'cover'}}/>
                </View>
            </View>
            <View style={{marginLeft:120,width:200, height:400, justifyContent:'center', alignItems:'center'}}>
                <View style={{backgroundColor:'#F8FFD2', width:130, height:100,margin:10, borderRadius:20}}>
                </View>
                <View style={{backgroundColor:'#F8FFD2', width:130, height:100,margin:10, borderRadius:20}}>
                </View>
                <View style={{backgroundColor:'#F8FFD2', width:130, height:100,margin:10, borderRadius:20}}>
                </View>
            </View>
        </View>

        <View style={{backgroundColor:'white', zIndex:1, flex:1 ,marginVertical:-70, borderRadius:80}}>

        </View>

        </View>
     </SafeAreaView>
  )
}