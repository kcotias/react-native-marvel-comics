import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  container: {
    height: responsiveHeight(11),
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: '#E1E5E8',
    borderRadius: 10,
    marginTop: 12,
    shadowColor: '#cfcfcf',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 3,
    elevation: 6,
    padding: 8,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    height: responsiveHeight(9),
    width: responsiveWidth(13),
    borderRadius: 10,
    marginRight: 5,
  },
  popularContainer: {
    height: responsiveHeight(18),
    width: responsiveWidth(68),
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: '#E1E5E8',
    borderRadius: 10,
    marginRight: 10,
    shadowColor: '#cfcfcf',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 3,
    elevation: 6,
    padding: 8,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  popularImage: {
    height: responsiveHeight(15),
    width: responsiveWidth(22),
    borderRadius: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: responsiveFontSize(1.9),
    marginBottom: 7,
  },
  issue: {
    fontWeight: '500',
    color: '#FBC02D',
  },
  textContainer: {
    flex: 1,
    marginLeft: 5,
  },
});
