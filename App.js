import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

const App: () => React$Node = () => {
  console.log('Hello world');
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Text style={[styles.text, { fontWeight: 'bold', color: '#000' }]}>
          Here are some boxes of different colors
        </Text>
        <Text style={[styles.text, { backgroundColor: '#2aa198' }]}>
          Cyan #2aa198
        </Text>
        <Text style={[styles.text, { backgroundColor: '#268bd2' }]}>
          Blue #268bd2
        </Text>
        <Text style={[styles.text, { backgroundColor: '#d33682' }]}>
          Magenta #d33682
        </Text>
        <Text style={[styles.text, { backgroundColor: '#cb4b16' }]}>
          Orange #cb4b16
        </Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  text: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
});

export default App;
