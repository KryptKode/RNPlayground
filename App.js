import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';

import ColorBox from './components/ColorBox';

const COLORS = [
  {
    name: 'Cyan',
    hexColorCode: '#2aa198',
  },
  {
    name: 'Blue',
    hexColorCode: '#268bd2',
  },
  {
    name: 'Magenta',
    hexColorCode: '#d33682',
  },
  {
    name: 'Orange',
    hexColorCode: '#cb4b16',
  },
];

const App: () => React$Node = () => {
  console.log('Hello world');
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colors
        </Text>
        <FlatList
          data={COLORS}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ColorBox text={item.name} backgroundColor={item.hexColorCode} />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});

export default App;
