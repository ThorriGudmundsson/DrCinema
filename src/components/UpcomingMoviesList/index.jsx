import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import UpcomingMovieThumbnail from '../UpcomingMovieThumbnail';

const UpcomingMoviesList = ({ upcomingMovies }) => (
  <View style={{ backgroundColor: '#3D3C3A' }}>
    <FlatList
      numColumns={1}
      data={upcomingMovies} // already sorted in upper layer
      renderItem={({
        item: {
          mongoId, title, poster, release, trailer,
        },
      }) => (
        <UpcomingMovieThumbnail
          mongoId={mongoId}
          title={title}
          poster={poster}
          release={release}
          trailer={trailer}
        />
      )}
      keyExtractor={(upcomingMovie) => upcomingMovie['_id']}
    />
  </View>
);

UpcomingMoviesList.propTypes = {
  upcomingMovies: PropTypes.arrayOf(PropTypes.shape({
    mongoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    release: PropTypes.string.isRequired,
    trailer: PropTypes.string,
  })).isRequired,
};

export default UpcomingMoviesList;
