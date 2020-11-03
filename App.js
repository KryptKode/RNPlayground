import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewPalette from './screens/AddNewPalette';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen
      name="ColorPalette"
      component={ColorPalette}
      options={({ route }) => ({ title: route.params.palette.paletteName })}
    />
  </MainStack.Navigator>
);

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AddNewPalette"
          options={{ title: 'Add a new palette' }}
          component={AddNewPalette}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
