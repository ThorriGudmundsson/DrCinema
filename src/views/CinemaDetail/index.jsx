import React from 'react';
import {
  View, Text,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
// import { getAllCinemas } from '../../services/cinemaService';
// import PropTypes from 'prop-types';
import data from '../../resources/data.json';

class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinema: {},
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     cinemas: data.cinemas,
  //   });
  // }

  render() {
    return (
      <View>
        <Text>
          Hello from Cinema Detail view!
        </Text>
      </View>
    );
  }
}

export default CinemaDetail;
