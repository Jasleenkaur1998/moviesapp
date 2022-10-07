import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { api } from '../apiconfig/config';
import axios from "axios";
import DisplayItem from '../components/displayItem';


const TvShowPage = (props) => {

  const [categoryType, setCategoryType] = useState("tv");
  const [sortType, setSortType] = useState("popular");

  const [tvData, setTvData] = useState([]);

  let findMovies = async () => {
    const apiResponse = await axios.get(`https://api.themoviedb.org/3/${categoryType}/${sortType}?api_key=${api}&language=en-US&page=1`);
    setTvData(apiResponse.data.results);
  };

  useEffect(() => {
    findMovies();
  }, [])


  return (
    <View>
      <FlatList
        data={tvData}
        renderItem={(data) => < DisplayItem item={data.item} navigation={props.navigation} />}
      />
    </View>
  )


}

export default TvShowPage