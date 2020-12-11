import React from 'react';
import {
  View, ScrollView,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { connect } from 'react-redux';
import styles from './style';
import Hamburger from '../../components/Hamburger';
import MovieDetails from '../../components/MovieDetails';
import * as movieService from '../../services/movieService';
import * as upcomingService from '../../services/upcomingMoviesService';

class SimpleMovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      release: '',
      trailerId: '',
    };
  }

  async componentDidMount() {
    let trailerId = false;
    const { upcomingMovies } = this.props;
    const movie = await movieService.getMovieByMongoId(upcomingMovies, this.props.navigation.state.params.mongoId);
  /*  if (this.props.navigation.state.params.trailer) {
      trailerId = await upcomingService.getYoutubeIDFromURL(this.props.navigation.state.params.trailer);
    }*/

    this.setState({
      movie,
      release: this.props.navigation.state.params.release,
      trailerId: this.props.navigation.state.params.trailer,
    });
  }

  render() {
    const { movie, release, trailerId } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Hamburger navigation={this.props.navigation} />
        <ScrollView style={{ flex: 1 }}>
          <MovieDetails
            title={movie.title}
            poster={movie.poster}
            plot={movie.plot}
            durationMinutes={movie.durationMinutes}
            year={movie.year}
            genres={movie.genres}
            release={release}
          />
          {
            trailerId
              ? (
                <View style={styles.videoPlayer}>
                  <YoutubePlayer
                    height={300}
                    width={300}
                    videoId={trailerId}
                  />
                </View>
              )
              : <></>
          }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ upcomingMovies }) => ({ upcomingMovies });

export default connect(mapStateToProps)(SimpleMovieDetail);
