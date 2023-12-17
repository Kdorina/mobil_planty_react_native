import {StyleSheet, View, Text, StatusBar, Button, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native'
import React , {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import BottomNavigation from '../navigation/BottomNavigation';
import ToDo from '../components/ToDo';

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
/* 
const ToDo = [
  {
    title: 'data',
  },
  {
    title: 'data',
  },
  {
    title: 'data',
  },
]; */
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
/* 
  const List = ({title}) => (
    <View style={{height:80,justifyContent:'center'}}>
    <View style={styles.list}>
      <Text style={styles.title2}>{title}</Text>
    </View>
    </View>
  ); */

export default function HomeScreen() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
    <View style={{flex:1}}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{fontSize:40, fontWeight:'bold'}}>My Plants</Text>
      <Button title='profile' color='black' onPress={()=> navigation.navigate('Profile')}></Button></View>
        <View style={{width:400, height:250, 
          borderRadius:20, overflow:'hidden'}}>
              <FlatList
              data={Plants}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}  horizontal={true} 
              />

        </View>
      {/*   <View style={{alignItems:'center',justifyContent:'center'}}>
          <View style={{backgroundColor:"#D0F288" ,width:350, height:250, borderRadius:20 }}>
            <FlatList data={ToDo} 
            renderItem={({item}) => <List title={item.title}/>}
            vertical={true}/>
            
          </View>
        </View> */}
         <ScrollView contentContainer={{ flexGrow: 1}}
          keyboardTaps='handle'>

          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>ToDo listám</Text>
            <View style={styles.items}>
              {/* this is where the tasks will go */}
              {
                taskItems.map((item, index)=>{
                  return (
                    <TouchableOpacity  key={index}  onPress={() => completeTask(index)}>
                    <ToDo text={item} />
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>

          </ScrollView>
              <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeListWrapper}>
          <TextInput style={styles.input} placeholder={'Teendőim...'} value={task} onChangeText={text =>setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View>
          
        </View>
      <Button title='plant' onPress={()=> navigation.navigate('Plants')}></Button>
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
      backgroundColor: '#D0F288',
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
    tasksWrapper:{
      paddingTop: 80,
      paddingHorizontal: 20,
      maxHeight:200
    },
  
    sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
    },
    items:{
      marginTop: 30
    },
    writeListWrapper:{
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
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
      // borderRadius: 20,
      backgroundColor: '#FFC107',
      justifyContent: 'center',
      alignItems:'center',
      borderColor: '#c0c0c0',
      borderWidth: 1,
      
    },
    addText:{
    }
});