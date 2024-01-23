import { View, Text, SafeAreaView, Button, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDroplet, faSun, faTemperature0, faTemperature1, faTemperature3, faTemperature4, faTemperatureArrowDown } from '@fortawesome/free-solid-svg-icons';
import ProgressCircle from 'react-native-progress-circle'
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 121, 25, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

export default function PlantScreen() {
    const navigation = useNavigation(); 

    const water = {
       /*  labels: ["Víz"], // optional */
        data: [0.8]
      };
      const light = {
       /*  labels: ["Fény"], // optional */
        data: [0.5]
      };
      const nutirent = {
       /*  labels: ["Tápanyag"], // optional */
        data: [0.2]
      };

  return (
        /* #1E2923 ez a szín jólnézne ki hátttérnek */
    <SafeAreaView style={{flex:1,backgroundColor:'#f2f2f2' , width:'100%', alignItems:'center'}}>
        <View style={{flex:1,backgroundColor:'#f2f2f2',width:'100%'}}>
        <Button title='<My plants' onPress={()=> navigation.navigate('Home')}></Button>
        <Text style={{margin:20,fontSize:60, fontWeight:'bold', color:'black', marginBottom:-30}}>Fikusz</Text>
        <View style={{flexDirection:'row',zIndex:2, width:'100%', justifyContent:'space-between', marginTop:0}}>
            <View style={{width:120, height:400,marginVertical:0, borderRadius:20}}>
                <View style={{height:'100%', width:'100%'}}>
                    <Image source={require('../assets/plant.png')} style={{flex:1,width:270,resizeMode:'cover'}}/>
                </View>
            </View>
         <View style={{marginLeft:160,width:200, height:400, paddingTop:50 }}>
          <Text style={{fontWeight:'bold',fontSize:17}}>Hőmérséklet</Text>
          <Text style={{fontSize:30, marginBottom:20}}><FontAwesomeIcon size={25} icon={faTemperature1}/> 25C</Text>
          <Text style={{fontWeight:'bold',fontSize:17}}>Fény</Text>
          <Text style={{fontSize:30}}><FontAwesomeIcon size={25} icon={faSun}/> 50%</Text>
         </View>
           {/*  <View style={{marginLeft:120,width:200, height:400, justifyContent:'center', alignItems:'center'}}>
                <View style={{backgroundColor:'#FDFFAB', width:130, height:100,margin:10, borderRadius:20}}>
                <ProgressChart style={{marginHorizontal:-120, marginVertical:-10}}
                data={water}
                width={screenWidth}
                height={120}
                strokeWidth={10}
                radius={40}
                chartConfig={chartConfig}
                hideLegend={false}
                />
                </View>
                <View style={{backgroundColor:'#FDFFAB', width:130, height:100,margin:10, borderRadius:20}}>
                <ProgressChart style={{marginHorizontal:-120, marginVertical:-10}}
                data={nutirent}
                width={screenWidth}
                height={120}
                strokeWidth={10}
                radius={40}
                chartConfig={chartConfig}
                hideLegend={false}
                />
                </View>
                <View style={{backgroundColor:'#FDFFAB', width:130, height:100,margin:10, borderRadius:20}}>
                <ProgressChart style={{marginHorizontal:-120, marginVertical:-10}}
                data={light}
                width={screenWidth}
                height={120}
                strokeWidth={10}
                radius={40}
                chartConfig={chartConfig}
                hideLegend={false}
                
                />
                </View>
            </View> */}
        </View>

        <View style={{backgroundColor:'white', zIndex:1, flex:1 ,marginVertical:-70, borderRadius:80}}>
            <View style={{flex:1,flexDirection:'column', alignItems:'center', marginTop:80}}>
              <View style={{backgroundColor:'#f7f7f7', width:'80%', padding:20, borderRadius:15, marginBottom:10, flexDirection:'row',alignItems:'center', justifyContent:''}}>
                <ProgressCircle
                  percent={60}
                  radius={40}
                  borderWidth={5}
                  color="#B7E5DD"
                  shadowColor="#999"
                  bgColor="#f7f7f7"
                >
                  <Text style={{ fontSize: 18 }}>{'60%'}</Text>
                </ProgressCircle>
                  <Text style={{fontSize:20,  marginLeft:'15%'}}><FontAwesomeIcon size={20} icon={faDroplet}/> Hidratáltság</Text>
              </View>

              <View  style={{backgroundColor:'#f7f7f7', width:'80%', padding:20, borderRadius:15, marginBottom:10,flexDirection:'row', alignItems:'center' , justifyContent:'',}}>
                <ProgressCircle
                    percent={30}
                    radius={40}
                    borderWidth={5}
                    color="#B6E388"
                    shadowColor="#999"
                    bgColor="#f7f7f7"
                  >
                    <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                  </ProgressCircle>
                  <Text style={{fontSize:20,marginLeft:'15%'}}><FontAwesomeIcon size={20} icon={faPagelines}/> Tápanyag</Text>
              </View>
            </View>
        </View>

        </View>
     </SafeAreaView>
  )
}