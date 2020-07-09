import { StyleSheet } from 'react-native';
import colors from '~/config/colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerContainer: {
    height: responsiveHeight(10),
    backgroundColor: colors.primary,
    padding: 20,
    margin: 27,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: 25,
    marginHorizontal: 20,
  },
  bannerTitle: {
    fontWeight: '700',
    fontSize: 24,
    color: 'white',
  },
  comicsArea: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#152130',
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  popularScroll: {
    paddingLeft: 18,
    alignItems: 'center',
  },
});
