import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {Input} from '@ui-kitten/components';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';

const ProfileHelperScreen = ({navigation, route}) => {
  const [mobile, setMobile] = useState('8978938767');
  const {topic, title} = route.params;
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const getContent = () => {
    switch (topic) {
      case 'CHANGE_MOBILE_NUMBER':
        return (
          <View style={{flex: 1, paddingHorizontal: hp(2)}}>
            <View style={{paddingHorizontal: hp(2), marginBottom: hp(2)}}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(2.5),
                  marginBottom: hp(1),
                }}>
                Update your mobile number
              </Text>
              <Text
                style={{
                  fontFamily: 'ProductSans-Regular',
                  fontSize: hp(1.8),
                  color: 'grey',
                }}>
                Will be verfied in the next step
              </Text>
            </View>
            <View style={{paddingHorizontal: hp(2), marginBottom: hp(2)}}>
              <Input
                value={mobile}
                textStyle={{
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                  paddingVertical: hp(1),
                }}
                onChangeText={nextValue => setMobile(nextValue)}
              />
            </View>
            <View style={{paddingHorizontal: hp(2), paddingVertical: hp(1)}}>
              <Pressable style={{backgroundColor: '#fb56c1'}}>
                <Text
                  style={{
                    fontFamily: 'ProductSans-Bold',
                    color: 'white',
                    textAlign: 'center',
                    paddingVertical: hp(1.5),
                  }}>
                  CONTINUE
                </Text>
              </Pressable>
            </View>
          </View>
        );
      case 'CHANGE_PASSWORD':
        return (
          <View
            style={{paddingHorizontal: hp(2), flex: 1, paddingVertical: hp(2)}}>
            <View style={{paddingHorizontal: hp(2), marginBottom: hp(2)}}>
              <Input
                value={oldPassword}
                placeholder="Old Password"
                textStyle={{
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                  paddingVertical: hp(1),
                }}
                onChangeText={nextValue => setOldPassword(nextValue)}
              />
            </View>
            <View style={{paddingHorizontal: hp(2), marginBottom: hp(2)}}>
              <Input
                value={newPassword}
                placeholder="New Password"
                textStyle={{
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                  paddingVertical: hp(1),
                }}
                onChangeText={nextValue => setNewPassword(nextValue)}
              />
            </View>
            <View style={{paddingHorizontal: hp(2), marginBottom: hp(2)}}>
              <Input
                value={confirmPassword}
                placeholder="Confirm Password"
                textStyle={{
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                  paddingVertical: hp(1),
                }}
                onChangeText={nextValue => setConfirmPassword(nextValue)}
              />
            </View>
            <View style={{paddingHorizontal: hp(2), paddingVertical: hp(1)}}>
              <ScaleAnimation onPress={()=>{}} scaleTo={0.9}>
                <Button viewProps={{backgroundColor: '#fb56c1'}}>
                  <Text
                    style={{
                      fontFamily: 'ProductSans-Bold',
                      color: 'white',
                      textAlign: 'center',
                      paddingVertical: hp(1.8),
                    }}>
                    CHANGE PASSWORD
                  </Text>
                </Button>
              </ScaleAnimation>
            </View>
          </View>
        );
      default:
        return <></>;
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: hp(9),
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            alignItems: 'center',
            paddingHorizontal: hp(2),
            alignItems: 'center',
          }}>
          <Feather
            name="arrow-left"
            size={hp(2.8)}
            style={{color: '#363636'}}
          />
        </Pressable>
        {title && (
          <View style={{paddingHorizontal: hp(0.5)}}>
            <Text
              style={{
                fontSize: hp(2.2),
                fontFamily: 'ProductSans-Bold',
                color: '#363636',
              }}>
              Change Password
            </Text>
          </View>
        )}
      </View>
      {getContent()}
    </SafeAreaView>
  );
};

export default ProfileHelperScreen;
