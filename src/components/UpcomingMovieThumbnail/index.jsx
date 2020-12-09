import React from 'react';
import {
  Text, View, TouchableOpacity, Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';

const UpcomingMovieThumbnail = ({
  id, title, poster, release, navigation: { navigate },
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => {}}
    /* navigate('UpcomingMovieDetail', {
      id,
    }) */
  >
    <View style={styles.ThumbnailContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: poster }}
      />
      <View>
        <Text style={styles.thumbnailName}>{title}</Text>
        <Text style={styles.thumbnailText}> releasedate {release}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

UpcomingMovieThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  release: PropTypes.string, // ATH release-dateIS
}

export default withNavigation(UpcomingMovieThumbnail);
