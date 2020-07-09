import { StyleSheet } from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: responsiveWidth(60),
  },

  modalTitle: {
    fontSize: responsiveFontSize(2.0),
    fontWeight: '600',
    marginBottom: 5,
  },

  modalDesc: {
    textAlign: 'center',
  },
});
