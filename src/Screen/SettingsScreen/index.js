// import React, {useContext} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {AuthContext} from '../../Routes/BottomTab';

// const SettingsScreen = () => {
//   const {state, setstate} = useContext(AuthContext);
//   return (
//     <View style={{backgroundColor: state, flex: 1}}>
//       <Text>SettingsScreen</Text>
//     </View>
//   );
// };

// export default SettingsScreen;

// const styles = StyleSheet.create({});

import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, SectionList} from 'react-native';
const DATA = [
  {
    title: 'Sep 1,2021',
    data: [
      {
        name: 'V care (Clinical)',
        unit: [
          {
            value: 120,
            type: 'Systolic',
          },
          {
            value: 85,
            type: 'Diastolic',
          },
          {
            value: 76,
            type: 'bpm',
          },
        ],
      },
      {
        name: 'V care (Clinical)',
        unit: [
          {
            value: '95%',
            type: 'SPO2',
          },
          {
            value: 100,
            type: 'PRbpm',
          },
        ],
      },
      {
        name: 'V care (Clinical)',
        unit: [
          {
            value: 120,
            type: 'Systolic',
          },
          {
            value: 85,
            type: 'Diastolic',
          },
          {
            value: 76,
            type: 'bpm',
          },
        ],
      },
    ],
  },
  {
    title: 'Sep 2,2021',
    data: [
      {
        name: 'V care (Clinical)',
        unit: [
          {
            value: 120,
            type: 'Systolic',
          },
          {
            value: 85,
            type: 'Diastolic',
          },
          {
            value: 76,
            type: 'bpm',
          },
        ],
      },
      {
        name: 'V care (Clinical)',
        unit: [
          {
            value: '95%',
            type: 'SPO2',
          },
          {
            value: 100,
            type: 'PRbpm',
          },
        ],
      },
      {
        name: 'V care (Clinical)',
        unit: [
          {
            value: 120,
            type: 'Systolic',
          },
          {
            value: 85,
            type: 'Diastolic',
          },
          {
            value: 76,
            type: 'bpm',
          },
        ],
      },
    ],
  },
];

const Item = ({title}) => (
  <View>
    <Text>{title.name}</Text>
  </View>
);

const index = () => {
  return (
    <SafeAreaView>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
