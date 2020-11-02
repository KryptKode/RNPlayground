import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ text, backgroundColor }) => (
  <View style={[styles.box, { backgroundColor }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
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
});

export default ColorBox;
