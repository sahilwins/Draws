import React from 'react';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.header}>
        
        
      <View
        style={{
          backgroundColor: '#0472BF',
        //   height: '10%',
          width: '100%',
          padding: 50,
          //   alignItems: 'center',
        //   justifyContent: 'center',
        //   borderBottomLeftRadius: 200,
        //   borderBottomRightRadius: 200,
        //   transform: [{scaleX: 1.2}],
        //   transform:  [{scaleY:1.2}]

        }}>
            <TextInput placeholder='login'/>
        <Text style={{}}>Icc </Text>
        <Text>health</Text>
      </View>

      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // width:'100%',
    // height:'100%',
    // flexDirection:'row',
    // alignItems:'center',
    // justifyContent:'center'
  },
  headertText: {
    fontWeight: 'bold',
  },
});
