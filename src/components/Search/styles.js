import { StyleSheet } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: responsiveWidth(85),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: responsiveWidth(100),
    height: responsiveHeight(35),
    marginTop: 20,
    marginBottom: 50,
  },
  title: {
    fontSize: responsiveFontSize(2.6),
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
});
