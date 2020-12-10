import React from 'react';
// import {  } from '../UpcomingMovies/index';
import {
  View, Text, Linking, ScrollView,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { selectCinema } from '../../actions/cinemaActions';
import { getMoviesInCinema } from '../../actions/movieActions';
import { getCinemaById } from '../../services/cinemaService';
import * as movieService from '../../services/movieService';
import Hamburger from '../../components/Hamburger';
import MovieList from '../../components/MovieList';
import styles from './styles';

class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinema: {},
      movies: [],
    };
    // console.log(this.props);
  }

  async componentDidMount() {
    const { selectCinema, getMoviesInCinema } = this.props;
    const cinema = await getCinemaById(this.props.navigation.state.params.id);
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
      // <ScrollView>
      <View style={{ flex: 1}}>
        <Text style={styles.nameText}>{cinema.name}</Text>
        <Text>{cinema.description}</Text>
        <Text>{cinema.address}</Text>
        <Text>{cinema.phone}</Text>
        <Text style={styles.websiteStyle} onPress={() => { Linking.openURL(`https://${cinema.website}`); }}>{cinema.website}</Text>
        <MovieList
          movies={movies}
        />
        <Hamburger
          navigation={this.props.navigation}
          themecolor="#333"
        />
      </View>
      // </ScrollView>
    );
  }
}

// const mapStateToProps = ({ cinema }) => ({ cinema });

export default connect(null, { selectCinema, getMoviesInCinema })(CinemaDetail);
