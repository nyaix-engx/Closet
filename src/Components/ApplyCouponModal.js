import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Input} from '@ui-kitten/components';

const ApplyCouponModal = props => {
  const insets = useSafeAreaInsets();
  const [coupon, setCoupon] = useState('');
  const handlePress = () => {
    coupon? props.setCouponApplied(true): props.setCouponApplied(false);   
    props.setShowModal();
  };
  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
        margin: 0,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: hp(2),
          paddingHorizontal: hp(2),
        }}>
        <View
          style={{
            paddingHorizontal: hp(1),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(2),
              marginBottom: hp(2),
            }}>
            APPLY COUPON
          </Text>
          <Pressable onPress={props.setShowModal} style={{marginBottom: hp(2)}}>
            <Fontisto
              name="plus-a"
              size={hp(2.5)}
              style={{transform: [{rotateZ: '45deg'}], padding: hp(0.8)}}
            />
          </Pressable>
        </View>
        <View style={{marginBottom: hp(2)}}>
          <Input
            placeholder="Enter Coupon Code"
            value={coupon}
            style={{borderRadius: hp(0.5)}}
            textStyle={{
              fontSize: Platform.OS === 'android' ? hp(2.3) : hp(2.1),
              paddingVertical: hp(0.5),
              fontFamily: 'ProductSans-Regular',
            }}
            accessoryRight={() => {
              return (
                <Pressable 
                  onPress={()=>setCoupon('')}
                  style={{
                    paddingHorizontal: hp(1),
                    height: hp(4),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Entypo name="circle-with-cross" size={hp(3)} style={{color:'grey'}} />
                </Pressable>
              );
            }}
            onChangeText={nextValue => setCoupon(nextValue)}
          />
        </View>
        <Pressable
          onPress={handlePress}
          style={{
            backgroundColor: '#fb7ca0',
            paddingVertical: hp(1.4),
            borderRadius: hp(0.3),
            marginBottom: insets.bottom,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: hp(2),
              fontFamily: 'ProductSans-Bold',
              color: 'white',
            }}>
            DONE
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ApplyCouponModal;
