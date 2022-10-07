import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { api } from '../apiconfig/config';
import axios from "axios";
import DisplayItem from '../components/displayItem';
import SelectList from 'react-native-dropdown-select-list'


const TvShowPage = (props) => {

  const [categoryType, setCategoryType] = useState("tv");
  const [sortType, setSortType] = useState("airing_today");
  const data = [{ key: 'airing_today', value: 'airing_today' }, { key: 'on_the_air', value: 'on_the_air' }, { key: 'top_rated', value: 'top_rated' }, { key: 'popular', value: 'popular' }];

  const [tvData, setTvData] = useState([]);

  let findMovies = async () => {
    const apiResponse = await axios.get(`https://api.themoviedb.org/3/${categoryType}/${sortType}?api_key=${api}&language=en-US&page=1`);
    setTvData(apiResponse.data.results);
  };

  useEffect(() => {
    findMovies();
  }, [sortType])


  return (
    <View>
      <SelectList setSelected={setSortType} data={data} onSelect={() => setSortType(sortType)} />
      <FlatList
        data={tvData}
        renderItem={(data) => < DisplayItem item={data.item} navigation={props.navigation} />}
      />
    </View>
  )


}

export default TvShowPage