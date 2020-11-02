import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App: () => React$Node = () => {
  console.log('Hello world');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}> World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    backgroundColor: 'lavender',
    flex: 1,
    padding: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
    minHeight: 100,
  },
});

export default App;
