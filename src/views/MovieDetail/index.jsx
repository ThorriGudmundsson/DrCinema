import React from 'react';
// import {  } from '../UpcomingMovies/index';
import {
  View, Text,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import Hamburger from '../../components/Hamburger';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      movie: {},
    };
    console.log(this.props);
  }

  async componentDidMount() {
    console.log("blabla");
    // // const cinema = await getCinemaById(this.props.navigation.state.params.id);
    // this.setState({
    //   // cinema,
    // });
  }

  render() {
    //const { cinema } = this.state;
    return (
      <View>
        <Text>Allir í bío</Text>
        <Hamburger
          navigation={this.props.navigation}
          themecolor='#ccc'
        />
      </View>
    );
  }
}

const mapStateToProps = ({ cinema }) => ({ cinema });

export default connect(mapStateToProps)(MovieDetail);
