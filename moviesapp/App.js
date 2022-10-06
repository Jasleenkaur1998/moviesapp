import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import moviespage from './screens/moviespage';
import searchpage from './screens/searchpage';
import tvshowpage from './screens/tvshowpage';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Movies Page" component={moviespage} />
      <Tab.Screen name="Search Results" component={searchpage} />
      <Tab.Screen name="TV Shows" component={tvshowpage } />

    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
