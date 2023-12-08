
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation';
import BottomNavigation from './navigation/BottomNavigation';

export default function App() {
  return (

      <NavigationContainer>
        <AppNavigation />


        <BottomNavigation/>        
      </NavigationContainer>


  );
}

/* const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    alignItems: 'center', 
    justifyContent: 'center',
  },

}); */