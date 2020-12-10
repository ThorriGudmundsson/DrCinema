import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 1,
    paddingRight: 10,
    flex: 1,
  },
  poster: {
    alignSelf: 'center',
    width: 150,
    height: 250,
  },
  movieTitle: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 3,
  },
  movieGenres: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'left',
  },
  movieGenreText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 6,
  },
  movieDurationText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  moviePlotText: {
    alignSelf: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
});
