import React from 'react';
import {
  View, Text,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { getCinemaById } from '../../services/cinemaService';

class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      cinema: {},
    };
    // console.log(this.props);
  }

  async componentDidMount() {
    const { cinemaId } = await this.props.navigation.state.params.id;
    // console.log(this.props.navigation.state.params.id);
    const cinema = await getCinemaById(cinemaId);
    // console.log(cinema);
    this.setState({
      cinema,
    });
  }

  render() {
    return (
      <View>
        <Text>Hér kemur bíohús</Text>
      </View>
    );
  }
}

// const mapStateToProps = ({ cinema }) => ({ cinema });

export default connect(null, { getCinemaById })(CinemaDetail);
