import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from '../../Routes/BottomTab';
import Home from './Home';
import Header from '../../Routes/Header';

const Drawer = createDrawerNavigator();

const Drawers = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Bottomscreen" component={BottomTab} />
      <Drawer.Screen name="Header" component={Header} />
    </Drawer.Navigator>
  );
};

export default Drawers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
