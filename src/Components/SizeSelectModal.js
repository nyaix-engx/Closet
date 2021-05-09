import React,{useState} from 'react';
import Modal from '../Components/WishlistScreenComps/Modal';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SizeSelectModal = (props) => {

  return (
    <Modal
      showModal={props.showSizeModal}
      setShowModal={props.setShowSizeModal}
      position={props.position}
      height={hp(40)}
      width={100}
      animationType={props.animationType}
      animationTime={props.animationTime}>
      <View
          style={{
            height: hp(6),
            backgroundColor: 'white',
            borderTopLeftRadius: hp(1),
            borderTopRightRadius: hp(1),
          }}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 2,
                display: 'flex',
                justifyContent: 'center',
                paddingHorizontal: hp(2.5),
              }}>
              <Text style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
                SORT BY
              </Text>
            </View>
            <View
              style={{
                flex: 4,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '75%',
                }}>
                <Pressable
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
                    ASC
                  </Text>
                  <FontAwesome5 name="sort-alpha-down" size={hp(2.3)} />
                </Pressable>
                <Pressable
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
                    DESC
                  </Text>
                  <FontAwesome5 name="sort-alpha-up" size={hp(2.3)} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={{height: hp(34), backgroundColor: 'purple'}}>
          <Text>Hello</Text>
        </View>
    </Modal>
  );
};

export default SizeSelectModal;
