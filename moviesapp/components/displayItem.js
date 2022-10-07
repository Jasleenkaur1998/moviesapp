import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const DisplayItem = (props) => {
  const openDetailsPage = () => {
    props.navigation.navigate("detailPage", {
      title: props?.item.title,
      category: props.category,
      id: props?.item.id,
    });
  };

const imageUrl = "https://image.tmdb.org/t/p/original" + props?.item.poster_path;

  return (
    <View style={styles.container}>
      <Image
        style={styles.movieImage}
        source={{
          uri: imageUrl
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          {props?.item.title}
        </Text>
        <Text>Popularity: {" "} {props?.item.popularity}</Text>
        <Text>Release Date: {" "} {props?.item.release_date}</Text>
        <TouchableOpacity style={styles.moreDetails} onPress={openDetailsPage}>
          <Text style={styles.buttonTitle}>More Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  moreDetails: {
    width: 150,
    alignContent: "center",
    padding: 8,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center"
  },
  title: {
    fontWeight: "600"
  },
  movieImage: {
    width: 80,
    height: 80,
    display: "flex",
    margin: 25,
    borderRadius: 10
  },
  content: {
    display: "flex",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "#fff"
  }
});

export default DisplayItem;