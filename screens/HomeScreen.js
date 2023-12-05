import {StyleSheet, View, Text, StatusBar, Button, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Plants = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First plant',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second plant',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third plant',
    },
  ];

const ToDo = [
  {
    title: 'Megontozni Egont',
  },
  {
    title: 'Interjuzni',
  },
  {
    title: 'Megirni a progit',
  },
]
  const Item = ({title}) => (
    <View style={{ justifyContent:'center'}}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
    </View>
  );

  const List = ({title}) => (
    <View style={{height:80,justifyContent:'center'}}>
    <View style={styles.list}>
      <Text style={styles.title2}>{title}</Text>
    </View>
    </View>
  );

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex:1}}>
      <Text style={{fontSize:40, fontWeight:'bold'}}>My Plants</Text>
        <View style={{width:400, height:250, 
          borderRadius:20, overflow:'hidden'}}>
            
              <FlatList
              data={Plants}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}  horizontal={true} 
              />

        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         {/*  <Text style={{fontSize:40, fontWeight:'bold'}}>ToDO</Text> */}
          <View style={{backgroundColor:"green" ,width:350, height:250, borderRadius:20 }}>
            <FlatList data={ToDo} 
            renderItem={({item}) => <List title={item.title}/>}
            vertical={true}/>
          </View>
        </View>
        <View>
          
        </View>
      <Button title='back' onPress={()=> navigation.navigate('Login')}></Button>
      <StatusBar style="auto" />
    </View>
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
      backgroundColor: 'green',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      height:170,
      width:150,
      borderRadius:20,
     
    },
    list:{
      padding:15,
      backgroundColor:'white',
      borderRadius:30,
      marginHorizontal:10
    },
    title: {
      fontSize: 32,
    },
    title2: {
      fontSize: 20,

    },
});