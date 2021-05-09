import React from 'react';
import {View, Text, Image, Platform, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SimilarStylesCard = () => {
  return (
    <Pressable
      style={{
        marginHorizontal: hp(0.5),
        width: Platform.OS === 'ios' ? hp(20) : hp(22),
        height: hp(33),
        borderWidth: hp(0.1),
        borderColor: '#c7c7c7',
      }}>
      <View style={{flex: 4, position: 'relative'}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          source={require('../../Assets/Images/jeans.jpg')}
        />
      </View>
      <View
        style={{
          flex: 1.1,
          backgroundColor: 'white',
          display: 'flex',
          paddingHorizontal: hp(1),
          borderBottomColor: '#c7c7c7',
        }}>
        <View style={{display: 'flex', flexDirection: 'column',justifyContent:'center'}}>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              fontSize: hp(1.6),
              margin: hp(0.2),
              fontWeight: '100',
            }}>
            Roadster
          </Text>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              margin: hp(0.2),
              fontWeight: 'bold',
              fontSize: hp(1.6),
            }}>
            Rs. 1000
          </Text>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              fontWeight: '100',
              color: 'grey',
              margin:hp(0.2),
              fontSize: hp(1.5),
            }}>
            Sweater
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SimilarStylesCard;
