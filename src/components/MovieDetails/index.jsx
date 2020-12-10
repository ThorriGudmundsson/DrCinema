import React from 'react';
import {
  View, Text, Image, FlatList,
} from 'react-native';
import styles from './style';

const MovieDetails = ({
  title, poster, plot, durationMinutes, year, genres,
}) => (
  <View style={[styles.container,{ flex: 1}]}>
    <Text style={styles.movieTitle}>{title} ({year})</Text>
    <Image source={{ uri: poster }} style={styles.poster} />
    <Text style={styles.movieDurationText}>
      Útgáfuár: {year}
    </Text>
    <Text style={styles.movieDurationText}>Lengd: {durationMinutes} mínútur</Text>
    <View>
      <FlatList
        numColumns={1}
        contentContainerStyle={{ flexDirection: 'row' }}
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
