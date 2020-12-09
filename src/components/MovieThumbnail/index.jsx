import React from 'react';
import {
  Text, View, TouchableOpacity, Linking,
} from 'react-native';
import { withNavigation } from 'react-navigation';
// import PropTypes from 'prop-types';
import styles from './styles';

const MovieThumbnail = ({
  id, title, poster, plot, durationMinutes, year, genres, navigation: { navigate },
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => navigate('MovieDetail', {
      id,
    })}
  >
    <View style={styles.movieThumbnailContainer}>
      <View>
        <Text style={styles.thumbnailName}>{title}</Text>
        <Text style={styles.thumbnailText}>
          {genres.map((genre) => (
            <Text>{genre.Name}</Text>
          ))}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

// CinemaThumbnail.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   website: PropTypes.string.isRequired,
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func.isRequired,
//   }).isRequired,
// };

export default withNavigation(MovieThumbnail);
