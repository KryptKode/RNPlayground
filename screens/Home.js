import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import PaletteShowCase from '../components/PaletteShowcase';

const COLOR_PALETTES = [
  {
    paletteName: 'Solarized',
    colors: [
      { colorName: 'Base03', hexCode: '#002b36' },
      { colorName: 'Base02', hexCode: '#073642' },
      { colorName: 'Base01', hexCode: '#586e75' },
      { colorName: 'Base00', hexCode: '#657b83' },
      { colorName: 'Base0', hexCode: '#839496' },
      { colorName: 'Base1', hexCode: '#93a1a1' },
      { colorName: 'Base2', hexCode: '#eee8d5' },
      { colorName: 'Base3', hexCode: '#fdf6e3' },
      { colorName: 'Yellow', hexCode: '#b58900' },
      { colorName: 'Orange', hexCode: '#cb4b16' },
      { colorName: 'Red', hexCode: '#dc322f' },
      { colorName: 'Magenta', hexCode: '#d33682' },
      { colorName: 'Violet', hexCode: '#6c71c4' },
      { colorName: 'Blue', hexCode: '#268bd2' },
      { colorName: 'Cyan', hexCode: '#2aa198' },
      { colorName: 'Green', hexCode: '#859900' },
    ],
  },
  {
    paletteName: 'Rainbow',
    colors: [
      { colorName: 'Red', hexCode: '#FF0000' },
      { colorName: 'Orange', hexCode: '#FF7F00' },
      { colorName: 'Yellow', hexCode: '#FFFF00' },
      { colorName: 'Green', hexCode: '#00FF00' },
      { colorName: 'Violet', hexCode: '#8B00FF' },
    ],
  },
  {
    paletteName: 'FrontEnd Masters',
    colors: [
      { colorName: 'Red', hexCode: '#c02d28' },
      { colorName: 'Black', hexCode: '#3e3e3e' },
      { colorName: 'Grey', hexCode: '#8a8a8a' },
      { colorName: 'White', hexCode: '#ffffff' },
      { colorName: 'Orange', hexCode: '#e66225' },
    ],
  },
];

const Home = ({ navigation, route }) => {
  const [palettes, setPalettes] = useState(COLOR_PALETTES);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const newPalette = route.params ? route.params.newPalette : null;

  console.log('newPalette', newPalette);

  useEffect(() => {
    newPalette && setPalettes((current) => [newPalette, ...current]);
  }, [newPalette]);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  const handleFetchPalettes = () => {
    setIsRefreshing(true);
    fetch('https://color-palette-api.kadikraman.now.sh/palettes')
      .then((response) => response.json())
      .then((res) => {
        console.log('PALETTES, ', res);
        setIsRefreshing(false);
        setPalettes(res);
      })
      .catch((err) => {
        console.error('Error fetching palettes ', err);
        setIsRefreshing(false);
      });
  };

  const handleRefresh = useCallback(async () => {
    handleFetchPalettes();
  }, []);

  const onItemClick = useCallback(
    (palette) => {
      navigation.navigate('ColorPalette', { palette });
    },
    [navigation],
  );

  const onAddNewClick = useCallback(() => {
    navigation.navigate('AddNewPalette');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={onAddNewClick}>
        <Text style={styles.addNew}> Add new palette </Text>
      </TouchableHighlight>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        data={palettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PaletteShowCase
            key={item.paletteName}
            palette={item}
            onItemClick={onItemClick}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addNew: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    color: 'green',
  },

  container: {
    marginTop: 10,
  },
});

export default Home;
