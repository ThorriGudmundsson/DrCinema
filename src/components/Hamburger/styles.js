import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  HamburgerContainer: {
    zIndex: 999, // put the menu on top and over the navigation
    position: 'absolute',
    top: -65,
    right: 0,
  },

  HamburgerIcon: {
    padding: 20, // using this so clicable area are biggers
    fontSize: 30,
    color: '#fff',
  },

  modalOver: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#000',
    // opacity: 0.7,
  },

  menuPosition: {
    position: 'absolute', // put the menu on top and over the navigation
    top: 50,
    right: 0,
  },
  menuButton: {
    marginBottom: 6,
    backgroundColor: '#fff',
    width: 200,
    height: 60,
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,

  },

});
