import React, {useState, useContext} from 'react';
import {SafeAreaView, Switch} from 'react-native';
import {StyleSheet, Text, View, Button} from 'react-native';
import {AuthContext} from '../../Routes/BottomTab';

const HomeScreen = () => {
  const {state, setstate} = useContext(AuthContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setstate(isEnabled ? 'dodgerblue' : 'white');
  };
  return (
    

    <SafeAreaView style={{backgroundColor: state, flex: 1}}>
      <Text>HomeScreen</Text>
      <Button title="change color" onPress={() => setstate('yellow')} />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SafeAreaView>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
header:{
width:'100%',
height:'100%',
flexDirection:'row',
alignItems:'center',
justifyContent:'center'

},
headertText:{
  fontWeight:'bold'

}

});
