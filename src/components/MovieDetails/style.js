import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 1,
    paddingRight: 10,
    flex: 1,
  },
  poster: {
    width: 150,
    height: 250,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  movieGenres: {
    flex: 1,
    flexDirection: 'row',
  },
});
