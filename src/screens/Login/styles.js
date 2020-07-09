import { StyleSheet } from 'react-native';
import colors from '~/config/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  smallTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
  },
  bigTitle: {
    fontSize: 29,
    fontWeight: '700',
    color: colors.white,
  },
  image: {
    height: 180,
    marginTop: 30,
  },
});
