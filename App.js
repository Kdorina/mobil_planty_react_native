import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#54c0cc','#dcd964',]} style={styles.container}>
      <Image source={require('./assets/leaf.png')} style={{ justifyContent: 'center',width:350,resizeMode: 'contain'}}/>
      <Text style={styles.mainText}>Planty</Text>
      <Text style={styles.miniText}>Gondozd növényeidet,</Text>
      <Text style={styles.miniText}>követsd nyomon egészségüket</Text>

      <View style={styles.bgButton}>
        <View style={{backgroundColor:'#ffff', padding:10, borderRadius:50, width:200}}>
          <Button title='Tovább' color='#54c0cc' onPress={() => Alert.alert('Button pressed')}></Button>
        </View>
      </View>
      <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
   /*  alignItems: 'center', */
  /*   justifyContent: 'center', */
  },
  mainText:{
    textAlign:'left',
    marginLeft:20,
    fontWeight:"bold",
    fontSize:100,
  },
  miniText:{
    marginLeft:20,
    fontSize:20,
  },
  bgButton:{
    flex:1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
