import { StyleSheet, View, Text, StatusBar, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React from 'react'

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

  const Item = ({title}) => (
    <View style={{ justifyContent:'center'}}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
    </View>
  );

  
export default function TemporaryScreen() {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center',}}>
        <View style={{justifyContent:'center', alignItems:'center',}}>
        <Text style={{}}>Szia Alma! Üdvözölünk a planty csapatában</Text>
        <Text>Kérlek válaszd ki növényedet</Text>
        
        <View style={{width:350, height:400, justifyContent:'center', alignItems:'center', 
        borderRadius:20, backgroundColor:"green", overflow:'hidden'}}>
          
            <FlatList
            data={Plants}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}  horizontal={true} 
            />

        </View>
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
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height:250,
        borderRadius:10,
       
      },
      title: {
        fontSize: 32,
      },
  });