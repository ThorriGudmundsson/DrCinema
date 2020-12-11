import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 10,
  },
  thumbnailName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
    flexDirection: 'column',
    margin: 8,
  },
  thumbnailText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#ffff',
    textDecorationLine: 'underline',
    flexDirection: 'column',
    padding: 8,
  },
  cinemaThumbnailContainer: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#121875',
    borderWidth: 1,
    borderColor: 'black',
    margin: 4,
  },
});
