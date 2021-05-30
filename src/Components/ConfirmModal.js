import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable, Image, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ScaleAnimation from './ScaleAnimation';
import Button from './Button';

const ConfirmModal = props => {
  const insets = useSafeAreaInsets();
  //   console.log("Scroll position",props.scrollRef.current)
  const handlePress = () => {
    let x = props.items.filter((data, itemIndex) => {
      return itemIndex !== props.index;
    });
    props.screenRef.current.animateNextTransition();
    props.setItems([...x]);
    props.setShowModal();
    Platform.OS === 'ios' &&
      props.scrollRef.current.scrollTo({
        y: props.scrollY - hp(30),
        animated: true,
      });
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
            flexDirection: 'row',
            height: hp(13),
            backgroundColor: 'white',
            marginBottom: hp(2),
          }}>
          <View style={{flex: 2}}>
            <View
              style={{
                height: hp(13),
                width: hp(10),
                borderColor: '#e0e0e0',
                borderWidth: hp(0.05),
              }}>
              <Image
                style={{width: '100%', height: hp(12)}}
                source={props.image}
              />
            </View>
          </View>
          <View style={{flex: 5, paddingHorizontal: hp(1)}}>
            <Text
              style={{
                fontFamily: 'ProductSans-Bold',
                fontSize: hp(1.8),
                paddingVertical: hp(1),
              }}>
              {props.heading}
            </Text>
            <Text
              style={{
                fontFamily: 'ProductSans-Regular',
                fontSize: hp(1.6),
                color: '#adadad',
              }}>
              {props.text}
            </Text>
          </View>
          <View style={{flex: 0.8}}>
            <Pressable
              onPress={props.setShowModal}
              style={{marginBottom: hp(2)}}>
              <Fontisto
                name="plus-a"
                size={hp(2.5)}
                style={{transform: [{rotateZ: '45deg'}], padding: hp(0.8)}}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: insets.bottom,
          }}>
          <View style={{width: '48%'}}>
            <ScaleAnimation onPress={() => props.setShowModal()} scaleTo={0.9}>
              <Button
                viewProps={{
                  backgroundColor: 'grey',
                  paddingVertical: hp(1.2),
                  width: '100%',
                  borderRadius: hp(0.3),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    color: 'white',
                  }}>
                  {props.cancelButtonText}
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View
            style={{
              width: '48%',
            }}>
            <ScaleAnimation onPress={handlePress} scaleTo={0.9}>
              <Button
                viewProps={{
                  backgroundColor: '#fb7ca0',
                  paddingVertical: hp(1.2),
                  width: '100%',
                  borderRadius: hp(0.3),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    color: 'white',
                  }}>
                  {props.confirmButtonText}
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
