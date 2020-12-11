import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style';
import MovieThumbnail from '../MovieThumbnail';

const MovieList = ({ movies, cinemaId }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={movies}
      renderItem={({
        item: {
          _id, title, poster, plot, durationMinutes, year, genres,
        },
      }) => (
        <MovieThumbnail
          mongoId={_id}
          cinemaId={cinemaId}
          title={title}
          poster={poster}
          plot={plot}
          durationMinutes={durationMinutes}
          year={year}
          genres={genres}
        />
      )}
      keyExtractor={(movie) => movie.id.toString()}
    />
  </View>
);

export default MovieList;
