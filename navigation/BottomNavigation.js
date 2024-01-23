import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faMugSaucer, faPeopleLine, faPersonRifle, faPlantWilt, faPortrait, faSeedling, faUser } from '@fortawesome/free-solid-svg-icons';

export default function BottomNavigation() {
  const navigation = useNavigation()
  return (
  

    <View style={{ alignItems:'center',justifyContent:'center', height:100}}>
        <View style={{backgroundColor:"white",alignItems:'center', justifyContent:'center',width:300, height:70, borderRadius:'50%'}}>
            <View style={styles.container}>
            <Text style={styles.icons} onPress={()=> navigation.navigate('Plants')}><FontAwesomeIcon size={25} icon={ faSeedling } color={ 'black' } /></Text>
            <Text style={styles.icons} onPress={()=> navigation.navigate('Home')}><FontAwesomeIcon size={25}  icon={ faHouse } color={ 'black' } /></Text>
            <Text style={styles.icons} onPress={()=> navigation.navigate('Profile')}><FontAwesomeIcon size={25}  icon={ faUser } color={ 'black'} /></Text>
            </View>
        </View>
    </View>
     
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row', 
    justifyContent:'space-between',
    width:200,
  },
  icons: {
    alignItems: 'center', 
  },
 
});