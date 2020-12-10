import React from 'react';
import {
  View, Text, Image, FlatList,
} from 'react-native';
import styles from './style';

const MovieDetails = ({
  title, poster, plot, durationMinutes, year, genres,
}) => (
  <View style={styles.container}>
    <Text style={styles.movieTitle}>{title}</Text>
    <Image source={{ uri: poster }} style={styles.poster} />
    <Text>{plot}</Text>
    <Text>{durationMinutes}</Text>
    <Text>{year}</Text>
    <View>
      <FlatList
        numColumns={1}
        data={genres}
        renderItem={({
          item: {
            Name,
          },
        }) => (
          <Text style={styles.thumbnailText}>{Name}</Text>
        )}
        keyExtractor={(genre) => genre.Name}
      />
    </View>
  </View>
);

export default MovieDetails;
