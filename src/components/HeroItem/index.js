import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '~/config/colors';

const HeroItem = ({ onPress, id, thumbnail, name }) => {
  return (
    <TouchableOpacity
      key={id}
      onPress={onPress}
      style={{
        width: responsiveWidth(60),
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        backgroundColor: colors.white,
        borderWidth: 3,
        borderColor: '#E1E5E8',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
          height: 1,
          width: 1,
        },
        shadowRadius: 3,
        elevation: 6,
        marginTop: 10,
      }}>
      {thumbnail && (
        <Image
          source={{
            uri: thumbnail + '/standard_small' + '.jpg',
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            marginLeft: 10,
          }}
        />
      )}
      <Text
        style={{
          fontSize: 18,
          marginLeft: 10,
        }}>
        {name || 'No hero with that name!'}
      </Text>
    </TouchableOpacity>
  );
};
export default HeroItem;
