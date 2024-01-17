import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function BottomNavigation() {
  const navigation = useNavigation()
  return (
    <View style={{ alignItems:'center',justifyContent:'center', height:100}}>
        <View style={{backgroundColor:"#a9e048",alignItems:'center', justifyContent:'center',width:300, height:70, borderRadius:'50%'}}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Text style={{padding:15,margin:10, backgroundColor:'white'}} onPress={()=> navigation.navigate('Plants')}>+</Text>
            <Text style={{padding:15,margin:10, backgroundColor:'white'}} onPress={()=> navigation.navigate('Home')}>+</Text>
            <Text style={{padding:15,margin:10, backgroundColor:'white'}} onPress={()=> navigation.navigate('Profile')}>+</Text>
            </View>
           
        </View>
    </View>
  )
}