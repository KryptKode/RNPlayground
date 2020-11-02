import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ text, backgroundColor }) => {
  const color =
    parseInt(backgroundColor.replace('#', ''), 16) > 0xffffff / 1.1
      ? 'black'
      : 'white';
  return (
    <View style={[styles.box, { backgroundColor }]}>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 15,
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
