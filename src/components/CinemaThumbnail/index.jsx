import React from 'react';
import {
  Text, View, TouchableOpacity, Linking,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';

const CinemaThumbnail = ({
  id, name, website, navigation: { navigate },
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => navigate('CinemaDetail', {
      id,
    })}
  >
    <View style={styles.cinemaThumbnailContainer}>
      <View>
        <Text style={styles.thumbnailName}>{name}</Text>
        <Text
          style={styles.thumbnailText}
          onPress={() => { Linking.openURL(`https://${website}`); }}
        >
          {website}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

CinemaThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(CinemaThumbnail);
