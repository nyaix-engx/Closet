import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Pressable, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AuthInput from '../../Components/Authentication/AuthInput';
import Facebook from '../../Assets/Svg/Facebook.svg';
import Google from '../../Assets/Svg/Google.svg';
import Apple from '../../Assets/Svg/Apple.svg';
import SocialIconWrapper from '../../Components/Authentication/SocialIconWrapper';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SigninScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'orange',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text style={styles.headingText}>Login</Text>
      </View>
      <View
        style={{
          flex: 2,
          // backgroundColor: 'grey',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <AuthInput signup={false} />
      </View>
      <View
        style={{
          // backgroundColor: 'purple',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable style={styles.button}>
          <Text style={styles.signin}>LOG IN</Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 0.7,
          // backgroundColor: 'green',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text style={styles.choiceText}>Or, Login With</Text>
      </View>
      <View
        style={{
          // backgroundColor: 'yellow',
          flex: 0.8,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <View style={styles.iconsContainer}>
          <SocialIconWrapper>
            <Google height={hp(3.5)} width={hp(3.5)} />
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Facebook height={hp(3.5)} width={hp(3.5)} />
          </SocialIconWrapper>
          <SocialIconWrapper>
            <Apple height={hp(3.5)} width={hp(3.5)} />
          </SocialIconWrapper>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'grey',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            // backgroundColor: 'green',
          }}>
          <View
            style={{
              flex: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontFamily: 'ProductSans-Bold',
                fontWeight: '800',
                textAlign: 'center',
              }}>
              SWIPE RIGHT FOR SIGN UP
            </Text>
          </View>
          <View
            style={{
              flex: 1.4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'grey'
            }}>
            <Fontisto size={hp(2)} name="arrow-right" />
          </View>
        </View>
      </View>
    </View>
  );
};
export default SigninScreen;

const styles = StyleSheet.create({
  headingText: {
    fontWeight: '100',
    fontFamily: 'ProductSans-Regular',
    fontSize: hp(4),
  },
  signin: {
    fontSize: hp(2),
    color: 'white',
    fontFamily: 'ProductSans-Regular',
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    borderRadius: hp(3),
    backgroundColor: '#fb7ca0',
    borderColor: '#fb7ca0',
    paddingVertical: hp(2),
    paddingHorizontal: hp(6),
  },
  choiceText: {
    textAlign: 'center',
    fontSize: hp(2),
    fontFamily:'ProductSans-Regular',
    color: 'grey',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registerTextWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerTxt1: {
    fontSize: hp(2.5),
    fontWeight: '700',
  },
  registerTxt2: {
    fontSize: hp(2.5),
    color: 'blue',
    fontWeight: '700',
  },
  wrapper: {
    flex: 1,
    marginVertical: Platform.OS ==='android'? hp(12):hp(16),
    marginHorizontal: hp(4.5),
    display: 'flex',
  },
});
