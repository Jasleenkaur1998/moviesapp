import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'
import DisplayItem from '../components/displayItem';
import axios from 'axios';
import { api } from '../apiconfig/config';

const SearchPage = (props) => {

  const [text, onChangeText] = useState("");
  const data = [{ key: 'multi', value: 'multi' }, { key: 'movie', value: 'movie' }, { key: 'tv', value: 'tv' }];
  const [sortType, setSortType] = useState("multi");
  const [searchResults, setSearchResults] = useState([]);


  const searchMovie = async () => {
    const result = await axios
      .get(
        `https://api.themoviedb.org/3/search/${sortType}?api_key=${api}&language=en-US&page=1&query=${text}`
      )
      setSearchResults(result.data.results);

  };


  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search Movie here"
      />
      <View style={styles.dropdownContainer}>
        <SelectList setSelected={setSortType} data={data} onSelect={() => setSortType(sortType)} />
        <TouchableOpacity style={styles.button} onPress={searchMovie}><Text style={styles.buttonText}>Search</Text></TouchableOpacity>
      </View>
      <FlatList
        data={searchResults}
        renderItem={(data) => <DisplayItem item={data.item} navigation={props.navigation} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    width: 100,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  buttonText:{ 
    color: "#fff"
  },
  dropdownContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default SearchPage