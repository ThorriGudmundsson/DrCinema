import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { getAllCinemas } from '../../services/cinemaService';
// import PropTypes from 'prop-types';
// import data from '../../resources/data.json';
import CinemaList from '../../components/CinemaList';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinemas: [],
    };
  }

  async componentDidMount() {
    const cinemas = await getAllCinemas();
    this.setState({
      cinemas,
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

export default Cinemas;
