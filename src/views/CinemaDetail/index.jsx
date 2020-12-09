import React from 'react';
// import {  } from '../UpcomingMovies/index';
import {
  View, Text,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { selectCinema } from '../../actions/cinemaActions';
import { getMoviesInCinema } from '../../actions/movieActions';
import { getCinemaById } from '../../services/cinemaService';
import * as movieService from '../../services/movieService';
import Hamburger from '../../components/Hamburger';
import MovieList from '../../components/MovieList';

class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      cinema: {},
      movies: [],
    };
    // console.log(this.props);
  }

  async componentDidMount() {
    const { selectCinema, getMoviesInCinema } = this.props;
    const cinema = await getCinemaById(this.props.navigation.state.params.id);
    // console.log(cinema.id);
    const movies = await movieService.getAllMoviesByCinemaId(cinema.id);
    this.setState({
      cinema,
      movies,
    });

    selectCinema(
      cinema['address\t'],
      cinema.city,
      cinema.description,
      cinema.google_map,
      cinema.id,
      cinema.name,
      cinema.phone,
      cinema.website,
    );
    getMoviesInCinema(cinema.id);
  }

  render() {
    const { cinema, movies } = this.state;
    return (
      <View>
        <Text>{cinema.name}</Text>
        <Text>{cinema.description}</Text>
        <Text>{cinema.address}</Text>
        <Text>{cinema.phone}</Text>
        <Text>{cinema.website}</Text>
        <Hamburger
          navigation={this.props.navigation}
          themecolor='#333'
        />
        <MovieList
          movies={movies}
        />
      </View>
    );
  }
}

// const mapStateToProps = ({ cinema }) => ({ cinema });

export default connect(null, { selectCinema, getMoviesInCinema })(CinemaDetail);
