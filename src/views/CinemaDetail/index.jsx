import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
// import { getAllCinemas } from '../../services/cinemaService';
// import PropTypes from 'prop-types';
import data from '../../resources/data.json';

class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemas: [],
    };
  }

  componentDidMount() {
    this.setState({
      cinemas: data.cinemas,
    });
  }

  render() {
    return (
      <View>
        <CinemaList
          cinemas={this.state.cinemas}
        />
      </View>
    );
  }
}

export default CinemaDetail;
