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
    <Text>
      Útgáfuár:
      {year}
    </Text>
    <Text>
      Sýningartími:
      {durationMinutes} mín
    </Text>
    <Text style={{padding: 10}}>{plot}</Text>
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
