import { View, Text } from 'react-native'
import React from 'react'

export default function BottomNavigation() {
  return (
    <View style={{ alignItems:'center',justifyContent:'center', height:100}}>
        <View style={{backgroundColor:"#8ADAB2",alignItems:'center', justifyContent:'center',width:300, height:70, borderRadius:'50%'}}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Text style={{padding:15,margin:10, backgroundColor:'white'}}>+</Text>
            <Text style={{padding:15,margin:10, backgroundColor:'white'}}>+</Text>
            <Text style={{padding:15,margin:10, backgroundColor:'white'}}>+</Text>
            </View>
           
        </View>
    </View>
  )
}