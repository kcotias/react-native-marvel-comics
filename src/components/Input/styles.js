import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import colors from '~/config/colors';

export default StyleSheet.create({
  container: {
    height: responsiveHeight(6),
    backgroundColor: colors.gray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white,
    padding: 10,
    fontSize: responsiveFontSize(2),
    width: responsiveWidth(70),
    fontWeight: '600',
  },
});
