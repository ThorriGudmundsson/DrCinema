import React from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
// import styles from './styles';
import UpcomingMovieThumbnail from '../UpcomingMovieThumbnail';


const UpcomingMoviesList = ({ upcomingMovies }) => (
  <View style={{ backgroundColor: '#3D3C3A' }}>
    <FlatList
      numColumns={1}
      data={upcomingMovies}
      //data={upcomingMovies.sort((a, b) => a.release.localeCompare(b.release))}
      renderItem={({
        item: {
          id, title, poster, release,
        },
      }) => (
        <UpcomingMovieThumbnail
          id={id}
          title={title}
          poster={poster}
          release={release}
        />
      )}
      keyExtractor={(upcomingMovie) => upcomingMovie.id.toString()}
    />

  </View>
);

UpcomingMoviesList.propTypes = {
  upcomingMovies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    release: PropTypes.string.isRequired,
  })).isRequired,
};

export default UpcomingMoviesList;
