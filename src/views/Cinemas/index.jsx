import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { storeCinemas } from '../../actions/cinemaActions';
// import { getAllCinemas } from '../../services/cinemaService';
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
    const { storeCinemas } = this.props;
    await storeCinemas();
    const { cinemas } = this.props;
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

const mapStateToProps = ({ cinemas }) => ({ cinemas });

export default connect(mapStateToProps, { storeCinemas })(Cinemas);
