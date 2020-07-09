import { StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import colors from '~/config/colors';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.primary,
    justifyContent: 'space-evenly',
  },

  title: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10,
    color: 'white',
  },
});
