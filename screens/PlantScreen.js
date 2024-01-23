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
    <SafeAreaView style={{flex:1,backgroundColor:'lightgrey' , width:'100%', alignItems:'center'}}>
        <View>
        <Button title='<My plants' onPress={()=> navigation.navigate('Home')}></Button>
        <Text style={{margin:20,fontSize:60, fontWeight:'bold', color:'black', marginBottom:-30}}>Fikusz</Text>
        <View style={{flexDirection:'row',zIndex:2, width:'100%', justifyContent:'space-around', marginTop:20}}>
            <View style={{width:120, height:400,marginVertical:30, borderRadius:20}}>
                <View style={{ height:'120%', width:'120%', position:'absolute'}}>
                    <Image source={require('../assets/plant.png')} style={{flex:1,width:300,resizeMode:'cover'}}/>
                </View>
            </View>
         
            <View style={{marginLeft:120,width:200, height:400, justifyContent:'center', alignItems:'center'}}>
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
            </View>
        </View>

        <View style={{backgroundColor:'white', zIndex:1, flex:1 ,marginVertical:-70, borderRadius:80}}>

        </View>

        </View>
     </SafeAreaView>
  )
}