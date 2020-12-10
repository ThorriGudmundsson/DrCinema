import React from 'react';
import {
  View, Text, Image, FlatList,
} from 'react-native';
import styles from './style';

const MovieDetails = ({
  title, poster, plot, durationMinutes, year, genres, release
}) => (
  <View style={styles.container}>
    <Text style={styles.movieTitle}>{title} ({year})</Text>
    <Image source={{ uri: poster }} style={styles.poster} />
    {
      durationMinutes
      ?
      <Text style={styles.movieDurationText}>Lengd: {durationMinutes} mínútur</Text>
      :
      <Text style={styles.movieDurationText}>Kemur í bío: {release} </Text>
    }

    <View>
      <FlatList
        numColumns={1}
        data={genres}
        renderItem={({
          item: {
            Name,
          },
        }) => (
          <Text style={styles.movieGenreText}>{Name}</Text>
        )}
        keyExtractor={(genre) => genre.Name}
      />
      <Text style={styles.moviePlotText}>{plot}</Text>
    </View>
  </View>
);

export default MovieDetails;
