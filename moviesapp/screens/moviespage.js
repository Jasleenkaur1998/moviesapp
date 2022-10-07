import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { api } from '../apiconfig/config';
import axios from "axios";
import DisplayItem from '../components/displayItem';
import SelectList from 'react-native-dropdown-select-list'


const MoviesPage = (props) => {

  const [categoryType, setCategoryType] = useState("movie");
  const [sortType, setSortType] = useState("upcoming");

  const [moviesData, setMoviesData] = useState([]);

  let findMovies = async () => {
    const apiResponse = await axios.get(`https://api.themoviedb.org/3/${categoryType}/${sortType}?api_key=${api}&language=en-US&page=1`);
    setMoviesData(apiResponse.data.results);
  };

  useEffect(() => {
    findMovies();
  }, [sortType])

  const data = [{ key: 'upcoming', value: 'upcoming' }, { key: 'now_playing', value: 'now_playing' }, { key: 'top_rated', value: 'top_rated' }, { key: 'popular', value: 'popular' }];


  return (
    <View>
      <SelectList setSelected={setSortType} data={data} onSelect={() => setSortType(sortType)} />
      <FlatList
        data={moviesData}
        renderItem={(data) => <DisplayItem item={data.item} navigation={props.navigation} />}
      />
    </View>
  )


}

export default MoviesPage