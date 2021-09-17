import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen/Index';
import SettingsScreen from '../Screen/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Update from '../Screen/SettingsScreen/Update';

export const AuthContext = React.createContext('dodgerblue');

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const [state, setstate] = useState('');
  return (
    <AuthContext.Provider value={{state, setstate}}>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <AntDesign name="setting" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
        name="Update"
        component={Update}
        options={{
          tabBarLabel: 'Update',
          tabBarIcon: ({color,size}) => (
            <Fontisto name='bell' color= {color} size={size}/>
          )        
        }}
        
        />

      </Tab.Navigator>
    </AuthContext.Provider>
  );
};

export default BottomTab;
