import React from 'react';
import {
  Text, View, TouchableOpacity, Linking,
} from 'react-native';
import PropTypes from 'prop-types';

const CinemaDetailThumbnail = ({
  id, name, description, address, phone, website,
}) => (
  <TouchableOpacity
    activeOpacity={0.7}

  >
    <View>
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{address}</Text>
        <Text>{phone}</Text>
        <Text
          onPress={() => { Linking.openURL(`https://${website}`); }}
        >
          {website}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

CinemaDetailThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  website: PropTypes.string.isRequired,
};


export default CinemaDetailThumbnail;
