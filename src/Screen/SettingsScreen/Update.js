import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

const Update = () => {
  const [checked, setChecked] = useState('first');
  const [value, setValue] = React.useState('first');

  return (
    <View>
      <RadioButton.Android
        borderless={false}
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <RadioButton.Android
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View>
          <Text>First</Text>
          <RadioButton value="first" />
        </View>
        <View>
          <Text>Second</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({});
