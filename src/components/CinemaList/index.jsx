import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
// import styles from './styles';
import CinemaThumbnail from '../CinemaThumbnail';
import {  } from '../../../App';
import {  } from '../CinemaThumbnail/index';
import {  } from '../../views/Cinemas/index';

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
    phone: PropTypes.string,
    website: PropTypes.string,
    description: PropTypes.string,
    city: PropTypes.string,
    address: PropTypes.string,
  })).isRequired,
};

export default CinemaList;
