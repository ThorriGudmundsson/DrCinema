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
    const cinema = await getCinemaById(this.props.navigation.state.params.id);
    this.setState({
      cinema,
    });
  }

  render() {
    const { cinema } = this.state;
    return (
      <View>
        <Text>{cinema.name}</Text>
      </View>
    );
  }
}

// const mapStateToProps = ({ cinema }) => ({ cinema });

export default connect(null, { getCinemaById })(CinemaDetail);
