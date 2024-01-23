import {StyleSheet, View, Text, StatusBar, Button, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput, Keyboard, Alert } from 'react-native'
import React , {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BottomNavigation from '../navigation/BottomNavigation';
import ToDo from '../components/ToDo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faBellConcierge, faBellSlash } from '@fortawesome/free-solid-svg-icons';

const Plants = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Data',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Data',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Data',
    },
  ];

  const Item = ({title}) => (
    <View style={{ justifyContent:'center'}}>
    <View style={styles.item}>
      <View style={{ height:'160%', position:'absolute',marginVertical:-50, marginHorizontal:20}}>
      <Image source={require('../assets/plant.png')} style={{flex:1,width:190,resizeMode:'cover'}}/>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
    </View>
  );

export default function HomeScreen() {

  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex:1}}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{fontSize:40, fontWeight:'bold'}}>My Plants</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
        <View style={{backgroundColor:'#9EB23B',borderRadius:'50%'}}>
        <Text style={{width:60,height:60}}></Text>
        </View>
      </TouchableOpacity>
      </View>
        <View style={{width:400, height:250, 
          borderRadius:20, overflow:'hidden'}}>
              <FlatList
              data={Plants}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}  horizontal={true} 
              />

        </View>

          <View>
            <Text style={{fontSize:30, fontWeight:'bold'}}><FontAwesomeIcon size={30} icon={faBell} color='#9EB23B'/> Alerts</Text>
            <View style={{margin:10}}>
              <View style={{backgroundColor:'#f7f7f7', width:'100%',
                padding:30, borderRadius:15,
                marginBottom:10,flexDirection:'column', 
                shadowColor: "#B3E283", shadowOpacity:  0.49,
                shadowOffset: {
                  width: 0,
                  height: 4,
                }, 
                shadowRadius: 5.62, 
                elevation: 6}}>
                <Text style={{fontSize:20, fontWeight:'700'}}>Orchidea</Text>
                <Text style={{fontSize:15}}>Elmaradt öntözés 10 napja</Text>
              </View>
              
              <View style={{backgroundColor:'#f7f7f7', width:'100%',
                padding:30, borderRadius:15,
                marginBottom:10,flexDirection:'column', 
                shadowColor: "#B3E283", shadowOpacity:  0.49,
                shadowOffset: {
                  width: 0,
                  height: 4,
                }, 
                shadowRadius: 5.62, 
                elevation: 6}}>
                <Text style={{fontSize:20, fontWeight:'700'}}>Kaktusz</Text>
                <Text style={{fontSize:15}}>Elmaradt öntözés 2 napja</Text>
              </View>

              <View style={{backgroundColor:'#f7f7f7', width:'100%',
                padding:30, borderRadius:15,
                marginBottom:10,flexDirection:'column', 
                shadowColor: "#B3E283", shadowOpacity:  0.49,
                shadowOffset: {
                  width: 0,
                  height: 4,
                }, 
                shadowRadius: 5.62, 
                elevation: 6}}>
                <Text style={{fontSize:20, fontWeight:'700'}}>Fikusz</Text>
                <Text style={{fontSize:15}}>Elmaradt öntözés 4 napja</Text>
              </View>
            </View>
          </View>
    {/*   <Button title='plant' onPress={()=> navigation.navigate('Plants')}></Button> */}
      <StatusBar style="auto" />
    </View>

    <BottomNavigation/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  item: {
      backgroundColor: '#D9EDBF',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      height:170,
      width:150,
      borderRadius:20,
     
    },

    title: {
      fontSize: 32,
      
    },

    tasksWrapper:{
      paddingTop: 0,
      paddingHorizontal: 20,
    },
  
    sectionTitle:{
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom:10,
    },
    items:{
      marginTop: 30, 
      
    },
    writeListWrapper:{
      bottom: 80,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      
    },
  
    input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor:'#c0c0c0',
    borderWidth: 1,
    width:250,
    fontFamily: 'Helvetica'
  
    },
    addWrapper:{
      width:60,
      height: 60,
      borderRadius:60,
      backgroundColor: '#a9e048',
      justifyContent: 'center',
      alignItems:'center',
    },
    addText:{
    }
});