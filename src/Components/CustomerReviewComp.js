import React from 'react';
import {View, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';

const CustomerReview = () => {
  return (
    <View
      style={{
        paddingVertical: hp(2.5),
        borderBottomWidth: hp(0.1),
        borderBottomColor: '#c9c9c9',
      }}>
      <Text
        style={{
          fontSize: hp(1.9),
          textAlign: 'justify',
          fontFamily: 'ProductSans-Regular',
          marginBottom: hp(1),
        }}>
        Fitting is kind of slim fit and is very good. Cloth quality is real good
        for its price. Color is nice and bright. Might look a bit fade in my
        uploaded picture. But actual color is exactly as per the advertised
        modal.
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#d6d6d6',
          alignSelf: 'flex-start',
          paddingHorizontal: hp(1),
          paddingVertical: hp(0.5),
          borderRadius: hp(0.2),
          marginBottom: hp(2),
        }}>
        <Text
          style={{
            fontSize: hp(2),
            fontFamily: 'ProductSans-Bold',
            marginRight: hp(0.5),
          }}>
          Size bought:
        </Text>
        <Text style={{fontSize: hp(2), fontFamily: 'ProductSans-Regular'}}>
          M
        </Text>
      </View>
      <View style={{marginBottom: hp(2)}}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(2),
              marginRight: hp(1),
            }}>
            Fit:
          </Text>
          <Text style={{fontFamily: 'ProductSans-Regular', fontSize: hp(2)}}>
            As Expected
          </Text>
        </View>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(2),
              marginRight: hp(1),
            }}>
            Length:
          </Text>
          <Text style={{fontFamily: 'ProductSans-Regular', fontSize: hp(2)}}>
            As Expected
          </Text>
        </View>
      </View>
      <View
        style={{
          //   paddingVertical: hp(1),
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1.5,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View
            style={{
              borderRightWidth: hp(0.1),
              borderColor: 'grey',
              display: 'flex',
              justifyContent: 'center',
              maxWidth: hp(14),
            }}>
            <Text
              style={{
                paddingRight: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Regular',
              }}>
              Manav Chauhan
            </Text>
          </View>
          <View
            style={{
              borderLeftWidth: hp(0.1),
              borderColor: 'grey',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                paddingLeft: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Regular',
              }}>
              20 Jan, 2021
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: hp(1),
            }}>
            <Octicons
              name="thumbsup"
              size={hp(2.5)}
              style={{marginRight: hp(1)}}
            />
            <Text>245</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Octicons
              name="thumbsdown"
              size={hp(2.5)}
              style={{marginRight: hp(1)}}
            />
            <Text>100</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomerReview;
