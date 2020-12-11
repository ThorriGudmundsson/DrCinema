import React from 'react';
import {
  Text, View, TouchableOpacity, Image, Linking,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const UpcomingMovieThumbnail = ({
  mongoId, title, poster, release, trailer, navigation: { navigate },
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => {
      navigate('SimpleMovieDetail', {
        mongoId,
        release,
        trailer,
      });
    }}
  >
    <View style={styles.ThumbnailContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: poster }}
      />
      <View>
        <Text style={styles.thumbnailName}>{title}</Text>
        <Text style={styles.thumbnailText}>Kemur í bíó: {release}</Text>
      </View>
      {
        trailer
          ? (
            <View
              style={styles.marker}
            >
              <Ionicons name="ios-film" style={styles.icon} />
            </View>
          )
          : <></>
      }
    </View>
  </TouchableOpacity>
);

UpcomingMovieThumbnail.propTypes = {
  mongoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  release: PropTypes.string.isRequired, // ATH release-dateIS
  trailer: PropTypes.string,
};

UpcomingMovieThumbnail.defaultProps = {
  poster: '',
  trailer: false,
};

export default withNavigation(UpcomingMovieThumbnail);
