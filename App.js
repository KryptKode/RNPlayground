import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';

const App: () => React$Node = () => {
  console.log('Hello world');
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colors
        </Text>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.text}>Cyan #2aa198</Text>
        </View>

        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Blue #268bd2</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.text}>Magenta #d33682</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.text}>Orange #cb4b16</Text>
        </View>
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
