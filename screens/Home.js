import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Color Palette')}>
        <Text>Hello there</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
