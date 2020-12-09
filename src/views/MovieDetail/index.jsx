import React from 'react';
// import {  } from '../UpcomingMovies/index';
import {
  View, Text,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import Hamburger from '../../components/Hamburger';
import * as movieService from '../../services/movieService';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      movie: {},
      cinema: {},
    };
    // console.log(this.props);
  }

  async componentDidMount() {
    const { cinema, movies } = this.props;
    const movie = await movieService.getMovieByMongoId(movies, this.props.navigation.state.params.mongoId);
    console.log(movie);
    this.setState({
      movie,
      cinema,
    });
  }

  render() {
    const { movie } = this.state;
    return (
      <View>
        <Hamburger
          navigation={this.props.navigation}
          themecolor="#ccc"
        />
        <Text>{movie.title}</Text>
        <Text>{movie.poster}</Text>
        <Text>{movie.plot}</Text>
        <Text>{movie.durationMinutes}</Text>
        <Text>{movie.year}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ cinema, movies }) => ({ cinema, movies });

export default connect(mapStateToProps)(MovieDetail);
