import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { getAllCinemas } from '../../services/cinemaService';
import CinemaList from '../../components/CinemaList';
import Hamburger from '../../components/Hamburger';

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
      <View style={{ flex: 1 }}>
        <CinemaList
          cinemas={this.state.cinemas}
        />
        <Hamburger
          navigation={this.props.navigation}
          themecolor='#800517'
        />
      </View>
    );
  }
}

export default connect()(Cinemas);
