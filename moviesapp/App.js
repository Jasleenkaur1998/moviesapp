import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TvShowPage from './screens/tvshowpage';
import SearchPage from './screens/searchpage';
import MoviesPage from './screens/moviespage';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Movies Page" component={MoviesPage} />
        <Tab.Screen name="Search Results" component={SearchPage} />
        <Tab.Screen name="TV Shows" component={TvShowPage} />

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
