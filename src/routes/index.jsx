import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
// import Movies from '../views/Movies';
// import UpcomingMovies from '../views/UpcomingMovies';

const StackNavigator = createStackNavigator({
  Cinemas,
  CinemaDetail,
  // Movies,
  // UpcomingMovies,
});

export default createAppContainer(StackNavigator);
