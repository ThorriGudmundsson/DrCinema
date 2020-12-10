import React from 'react';
import {
  View, Text, Linking,
} from 'react-native';
import { connect } from 'react-redux';
import { storeAllMovies } from '../../actions/movieActions';
import * as cinemaService from '../../services/cinemaService';
import * as movieService from '../../services/movieService';
import Hamburger from '../../components/Hamburger';
import MovieList from '../../components/MovieList';
import styles from './styles';

class CinemaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinema: {},
      cinemaMovies: [],
    };
  }

  async componentDidMount() {
    const { storeAllMovies } = this.props;
    await storeAllMovies();
    const { movies, cinemas } = this.props;
    const cinema = await cinemaService.getCinemaById(this.props.navigation.state.params.id, cinemas);
    const cinemaMovies = await movieService.getAllMoviesByCinemaId(cinema.id, movies);
    this.setState({
      cinema,
      cinemaMovies,
    });
  }

  render() {
    const { cinema, cinemaMovies } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.nameText}>{cinema.name}</Text>
        <Text>{cinema.description}</Text>
        <Text>{cinema.address}</Text>
        <Hamburger
          navigation={this.props.navigation}
          themecolor="#333"
        />
        <MovieList
          movies={cinemaMovies}
          cinemaId={cinema.id}
        />
        <View style={{ padding: 10 }}>
          <Text>
            Sími:
            {cinema.phone}
          </Text>
          <Text style={styles.websiteStyle} onPress={() => { Linking.openURL(`https://${cinema.website}`); }}>{cinema.website}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ cinemas, movies }) => ({ cinemas, movies });

export default connect(mapStateToProps, { storeAllMovies })(CinemaDetail);
