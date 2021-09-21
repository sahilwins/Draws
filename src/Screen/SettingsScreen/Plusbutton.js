import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,FlatList
} from 'react-native';

const Data = [
  {
    title: 'Requirement',
    data: ['UI', 'UX', 'CLI'],
  },
  {
    title: 'software Devlopment',
    data: ['App', 'login', 'Signup'],
  },
  {
    title: 'Working Interface',
    data: ['Installation', 'Updation', 'Fixbugs'],
  },
];
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Plusbutton = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
      
        sections={Data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Plusbutton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal:16
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff'
  },
  tittle: {
    fontSize: 24
  },
});
