import { View, Text, SafeAreaView, StyleSheet, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default function ProfileScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.holder}>

    <View style={{margin:30}}>
      <Text style={{color:'grey', fontSize:15}}  onPress={()=> navigation.navigate('Home')}><FontAwesomeIcon size={40} icon={faChevronCircleLeft}/></Text>
    </View>

    <View style={styles.container}>
    <View style={styles.profileBox}>
      <Text style={styles.mainText}>Profil</Text>
    </View>

    <View style={{backgroundColor:'#fafafa', width:'90%',
                padding:20, borderRadius:15,
                marginBottom:10,flexDirection:'column', 
                shadowColor: "#B3E283", shadowOpacity:  0.89,
                shadowOffset: {
                  width: 0,
                  height: 4,
                }, 
                shadowRadius: 10.62, 
                elevation: 6}}>
                <Text style={{fontSize:20, fontWeight:'700'}}>Név</Text>
                <Text style={{fontSize:15}}>Herbáli Andris</Text>
    </View>
    <View style={{backgroundColor:'#fafafa', width:'90%',
                padding:20, borderRadius:15,
                marginBottom:10,flexDirection:'column', 
                shadowColor: "#B3E283", shadowOpacity:  0.89,
                shadowOffset: {
                  width: 0,
                  height: 4,
                }, 
                shadowRadius: 10.62, 
                elevation: 6}}>
                <Text style={{fontSize:20, fontWeight:'700'}}>Email</Text>
                <Text style={{fontSize:15}}>herbali@gmail.com</Text>
    </View>
    <View style={{backgroundColor:'#fafafa', width:'90%',
                padding:20, borderRadius:15,
                marginBottom:10,flexDirection:'column', 
                shadowColor: "#B3E283", shadowOpacity:  0.89,
                shadowOffset: {
                  width: 0,
                  height: 4,
                }, 
                shadowRadius: 10.62, 
                elevation: 6}}>
                <Text style={{fontSize:20, fontWeight:'700'}}>Csatlakozás</Text>
                <Text style={{fontSize:15}}>2023.11.12</Text>
    </View>
              

      <View style={{width:'80%', marginTop:10}}>
          <View style={{flexDirection:"row", alignItems:'center', backgroundColor:"#DBFFAD", borderRadius:10, marginBottom:10}}>
            <View style={{backgroundColor:'#a9e048',borderRadius:'10%',margin:10,width:40,height:40}}></View>
            <Text style={styles.myplant}>Kaktusz</Text>
          </View>

          <View style={{flexDirection:"row",alignItems:'center', backgroundColor:"#DBFFAD", borderRadius:10, marginBottom:10}}>
             <View style={{backgroundColor:'#a9e048',borderRadius:'10%',margin:10,width:40,height:40}}></View>
            <Text style={styles.myplant}>Kaktusz</Text>
          </View>

          <View style={{flexDirection:"row",alignItems:'center', backgroundColor:"#DBFFAD", borderRadius:10, marginBottom:10}}>
            <View style={{backgroundColor:'#a9e048',borderRadius:'10%',margin:10,width:40,height:40}}></View>
            <Text style={styles.myplant}>Kaktusz</Text>
          </View>
      </View>
      <View style={{alignItems:'center', marginTop:30}}>
      <Text style={{color:'red', fontSize:15}}  onPress={()=> navigation.navigate('Login')}>Fiók törlése</Text>
      <Text style={{color:'grey', fontSize:20}}  onPress={()=> navigation.navigate('Login')}>Kijelentkezés</Text>
      </View>
      
    </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  holder: {
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:'white',
  /*   justifyContent: 'center', */
  },
  container:{
    width:'100%',
    height:'100%',
    alignItems: 'center',
    backgroundColor:'white',
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

});
