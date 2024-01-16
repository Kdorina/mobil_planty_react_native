import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.profileBox}>
      <Text style={styles.mainText} >Profil</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('')}>
        <View style={{backgroundColor:'darkgreen',borderRadius:'50%'}}>
        <Text style={{width:100,height:100}}></Text>
        </View>
      </TouchableOpacity>

      <View style={styles.optionsHolder}>
      <TouchableOpacity onPress={()=> navigation.navigate('')}>
        <View style={{backgroundColor:'darkgreen',borderRadius:'50%',margin:10}}>
        <Text style={{width:70,height:70}}></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('')}>
        <View style={{backgroundColor:'darkgreen',borderRadius:'50%',margin:10}}>
        <Text style={{width:70,height:70}}></Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('')}>
        <View style={{backgroundColor:'darkgreen',borderRadius:'50%',margin:10}}>
        <Text style={{width:70,height:70,}}></Text>
        </View>
      </TouchableOpacity>
      </View>

    </View>

    <View style={styles.profileDatas}>
          <Text style={styles.dataText}>Név</Text>
          <Text style={styles.datas}>Kovács Piroska</Text>
          <Text style={styles.dataText}>Email</Text>
          <Text style={styles.datas}>pirimiri@gmail.com</Text>
          <Text style={styles.dataText}>Növényeid száma: 3</Text>

      <View >
          <View style={{flexDirection:"row", alignItems:'center', backgroundColor:"#D0F288", borderRadius:10, marginBottom:10}}>
            <View style={{backgroundColor:'darkgreen',borderRadius:'10%',margin:10,width:40,height:40}}></View>
            <Text style={styles.myplant}>Kaktusz</Text>
          </View>

          <View style={{flexDirection:"row",alignItems:'center', backgroundColor:"#D0F288", borderRadius:10, marginBottom:10}}>
             <View style={{backgroundColor:'darkgreen',borderRadius:'10%',margin:10,width:40,height:40}}></View>
            <Text style={styles.myplant}>Kaktusz</Text>
          </View>

          <View style={{flexDirection:"row",alignItems:'center', backgroundColor:"#D0F288", borderRadius:10, marginBottom:10}}>
            <View style={{backgroundColor:'darkgreen',borderRadius:'10%',margin:10,width:40,height:40}}></View>
            <Text style={styles.myplant}>Kaktusz</Text>
          </View>
      </View>
      <View style={{alignItems:'center', marginTop:30}}>
      <Text style={{color:'#D0F288', fontSize:20}}  onPress={()=> navigation.navigate('Login')}>Kijelentkezés</Text>
      </View>
      
    </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    height:'100%',
    alignItems: 'center',
  /*   justifyContent: 'center', */
  },
  profileBox:{
    marginTop:20,
    alignItems: 'center',
  },
  mainText:{
    marginBottom:20,
    fontWeight:"bold",
    fontSize:25,
  },
  optionsHolder:{
    marginTop:25,
    flexDirection:'row'
  },
  profileDatas:{
    marginTop:20,
    padding:10,
    backgroundColor:'darkgreen',
    height:'50%',
    width:'80%',
    borderRadius:20,
  },
  dataText:{
    fontSize:20,
    fontWeight:'bold',
   
  },
  datas:{
    fontSize:20,
    backgroundColor:"#D0F288",
  },

});
