import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const PaletteShowCase = ({ palette, onItemClick }) => {
  return (
    <TouchableHighlight
      underlayColor="#DDDDDD"
      onPress={() => onItemClick(palette)}>
      <View style={styles.container}>
        <Text style={styles.title}>{palette.paletteName}</Text>
        <FlatList
          horizontal
          data={palette.colors.slice(0, 5)}
          keyExtractor={(item) => item.paletteName}
          renderItem={({ item }) => (
            <View
              key={item.paletteName}
              style={[styles.colorBox, { backgroundColor: item.hexCode }]}
            />
          )}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },

  colorBox: {
    width: 40,
    height: 40,
    marginEnd: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default PaletteShowCase;
