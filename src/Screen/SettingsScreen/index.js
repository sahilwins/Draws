import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../Routes/BottomTab';

const SettingsScreen = () => {
  const {state, setstate} = useContext(AuthContext);
  return (
    <View style={{backgroundColor: state, flex: 1}}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
