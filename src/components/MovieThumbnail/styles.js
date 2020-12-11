import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  thumbnailName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d0e4f5',
    flexDirection: 'column',
    //margin: 8,
  },
  thumbnailText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff',
    fontStyle: 'italic',
    flexDirection: 'column',
    //padding: 8,
  },
  movieThumbnailContainer: {
    flexDirection: 'row',
    flexGrow: 0.1,
    width: 'auto',
    backgroundColor: '#121875',
    borderWidth: 2,
    borderColor: '#d0e4f5',
    margin: 4,
    padding: 6,
  },
  textContainer: {
    width: 220,
  },
});
