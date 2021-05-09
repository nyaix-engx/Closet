import React from 'react';
import {StyleSheet, View, Text, Pressable, Platform} from 'react-native';
import Facebook from '../../Assets/Svg/Facebook.svg';
import Google from '../../Assets/Svg/Google.svg';
import Apple from '../../Assets/Svg/Apple.svg';
import SocialIconWrapper from '../../Components/Authentication/SocialIconWrapper';
import {Button} from '@ui-kitten/components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AuthInput from '../../Components/Authentication/AuthInput';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SignupScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flex: Platform.OS === 'android' ? 1 : 1.4,
          // backgroundColor: 'orange',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text style={styles.headingText}>Signup</Text>
      </View>
      <View style={styles.iconsContainer}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            // backgroundColor:'purple',
            alignItems:'center'
          }}>
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
          flex: Platform.OS==='android'? 0.5 :0.7,
          display: 'flex',
          justifyContent: 'center',
          // backgroundColor: 'orange',
        }}>
        <Text style={styles.choiceText}>Or, register with email</Text>
      </View>
      <View
        style={{
          flex: 5,
          // backgroundColor: 'green'
        }}>
        <View
          style={{
            flex: 2,
            // backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <AuthInput signup={true} />
        </View>
        <View
          style={{
            flex: 0.7,
            // backgroundColor: 'yellow',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center'
          }}>
          <Pressable style={styles.button} size="medium">
            <Text style={styles.signup}>SIGN UP</Text>
          </Pressable>
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
              flex: 1.6,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Fontisto size={hp(2)} name="arrow-left" />
          </View>
          <View
            style={{
              flex: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text
              style={{
                fontFamily: 'ProductSans-Bold',
                fontWeight: '800',
                textAlign: 'center',
              }}>
              SWIPE LEFT FOR SIGNIN
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: '100',
    fontFamily: 'ProductSans-Regular',
    fontSize: hp(4),
  },
  signup: {
    fontSize: hp(2),
    color: 'white',
    fontFamily: 'ProductSans-Regular',
    fontWeight: '700',
    textAlign: 'center',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: Platform.OS === 'ios' ? 1.4 : 1.2,
    justifyContent: 'space-between',
    // backgroundColor: 'purple',
  },
  button: {
    borderRadius: hp(3),
    backgroundColor: '#fb7ca0',
    borderColor: '#fb7ca0',
    paddingVertical: hp(2),
    paddingHorizontal: hp(4),
  },
  choiceText: {
    textAlign: 'center',
    fontSize: hp(2),
    fontFamily: 'ProductSans-Regular',
    color: 'grey',
  },
  wrapper: {
    flex: 1,
    marginVertical: Platform.OS === 'android' ? hp(8) : hp(12),
    marginHorizontal: hp(4.5),
    display: 'flex',
  },
});

export default SignupScreen;
