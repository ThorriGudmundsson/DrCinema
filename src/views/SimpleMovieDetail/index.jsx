import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Hamburger from '../../components/Hamburger';
import MovieDetails from '../../components/MovieDetails';
import * as movieService from '../../services/movieService';

class SimpleMovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      release: '',
    };
  }

  async componentDidMount() {
    const { upcomingMovies } = this.props;
    const movie = await movieService.getMovieByMongoId(upcomingMovies, this.props.navigation.state.params.mongoId);

    this.setState({
      movie,
      release: this.props.navigation.state.params.release,
    });
  }

  render() {
    const { movie, release } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Hamburger navigation={this.props.navigation} />
        <MovieDetails
          title={movie.title}
          poster={movie.poster}
          plot={movie.plot}
          durationMinutes={movie.durationMinutes}
          year={movie.year}
          genres={movie.genres}
          release={release}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ upcomingMovies }) => ({ upcomingMovies });

export default connect(mapStateToProps)(SimpleMovieDetail);
