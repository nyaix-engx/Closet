import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {CreditCardsLogo} from '../Utils/arrays'

const CreditCard = () => {
  return (
    <View
      style={{
        paddingTop: hp(2),
        paddingHorizontal: hp(2),
        paddingBottom: hp(1),
        backgroundColor: 'white',
        borderRadius: hp(0.5),
        borderColor: '#cfcfcf',
        borderWidth: hp(0.1),
        marginBottom:hp(2)
      }}>
      <View style={{alignItems: 'flex-end'}}>
        {CreditCardsLogo[1].logo}
      </View>
      <View style={{marginBottom: hp(2)}}>
        <Text
          style={{
            fontFamily: 'ProductSans-Regular',
            fontSize: hp(2),
            color: '#bababa',
            marginBottom: hp(0.5),
          }}>
          CARD NUMBER
        </Text>
        <Text
          style={{
            fontFamily: 'ProductSans-Regular',
            fontSize: hp(2.4),
          }}>
          5555 55** **** 4444
        </Text>
      </View>
      <View
        style={{
          marginBottom: hp(2),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              fontSize: hp(2),
              color: '#bababa',
              marginBottom: hp(0.5),
            }}>
            NAME ON CARD
          </Text>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              fontSize: hp(2.4),
            }}>
            Alan Walker
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              fontSize: hp(2),
              color: '#bababa',
              marginBottom: hp(0.5),
            }}>
            VALIDITY
          </Text>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              fontSize: hp(2.4),
              textAlign: 'center',
            }}>
            **/**
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderTopColor: '#cfcfcf',
          borderTopWidth: hp(0.1),
          paddingVertical: hp(1),
        }}>
        <Pressable
          style={{
            flex: 1,
            borderRightColor: '#cfcfcf',
            borderRightWidth: hp(0.05),
            paddingVertical: hp(1),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(2),
              color: 'blue',
            }}>
            EDIT
          </Text>
        </Pressable>
        <Pressable
          style={{
            flex: 1,
            borderLeftColor: '#cfcfcf',
            borderLeftWidth: hp(0.05),
            paddingVertical: hp(1),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(2),
              color: 'blue',
            }}>
            REMOVE
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreditCard;
