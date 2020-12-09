import React from 'react';
import { View, FlatList } from 'react-native';
// import PropTypes from 'prop-types';
// import styles from './styles';
import MovieThumbnail from '../MovieThumbnail';
// import {  } from '../../../App';
// import {  } from '../CinemaThumbnail/index';
// import {  } from '../../views/Cinemas/index';

const MovieList = ({ movies }) => (
  <View style={{ backgroundColor: '#3D3C3A' }}>
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

// MovieList.propTypes = {
//   cinemas: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     phone: PropTypes.string,
//     website: PropTypes.string,
//     description: PropTypes.string,
//     city: PropTypes.string,
//     address: PropTypes.string,
//   })).isRequired,
// };

export default MovieList;
