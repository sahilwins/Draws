import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../Routes/BottomTab';

const ProfileScreen = () => {
  const {state, setstate} = useContext(AuthContext);
  return (
    <View style={{backgroundColor: state, flex: 1}}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
