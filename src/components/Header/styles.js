import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 16,
    backgroundColor: colors.backgroundColor,
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    justifyContent: 'space-between',
  },
});
