import React from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import CinemaThumbnail from '../CinemaThumbnail';

const CinemaList = ({ cinemas }) => (
  <View style={{ backgroundColor: '#3D3C3A' }}>
    <FlatList
      numColumns={1}
      data={cinemas.sort((a, b) => a.name.localeCompare(b.name, 'is'))}
      renderItem={({
        item: {
          id, name, website,
        },
      }) => (
        <CinemaThumbnail
          id={id}
          name={name}
          website={website}
        />
      )}
      keyExtractor={(cinema) => cinema.id.toString()}
    />
  </View>
);

CinemaList.propTypes = {
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
};

export default CinemaList;
