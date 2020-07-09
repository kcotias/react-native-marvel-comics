import { StyleSheet } from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    height: responsiveScreenHeight(5),
    paddingHorizontal: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowRadius: 2,
    elevation: 6,
  },

  textBtn: {
    fontSize: responsiveScreenFontSize(1.8),
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
