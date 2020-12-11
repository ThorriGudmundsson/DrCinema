import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import CinemaDetailThumbnail from '../CinemaDetailThumbnail/index';

const cinemaDetails = ({ cinemas }) => (
  <View>
    <FlatList
      numColumns={1}
      data={cinemas}
      renderItem={({
        item: {
          id, name, description, address, phone, website,
        },
      }) => (
        <CinemaDetailThumbnail
          id={id}
          name={name}
          description={description}
          address={address}
          phone={phone}
          website={website}
        />
      )}
      keyExtractor={(cinema) => cinema.id.toString()}
    />
  </View>
);

cinemaDetails.propTypes = {
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

export default cinemaDetails;
