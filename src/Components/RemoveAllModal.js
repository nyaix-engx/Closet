import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, Pressable, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RemoveAllModal = props => {
  const handlePress=()=>{
    props.setOutOfStock([])
    props.setShowModal()
    Platform.OS ==='ios' && props.scrollRef.current.scrollTo({y:0,animated:true})
  }
  return (
    <Modal
      isVisible={props.showModal}
      setShowModal={props.setShowModal}
      onBackdropPress={props.setShowModal}
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: hp(3),
        margin: 0,
      }}>
      <View
        style={{
          paddingVertical: hp(1),
          paddingHorizontal: hp(2),
          backgroundColor: 'white',
          borderRadius:hp(1)
        }}>
        <View style={{ display: 'flex', justifyContent: 'center',paddingVertical:hp(2)}}>
          <Text style={{fontFamily: 'ProductSans-Regular', fontWeight: 'bold'}}>
            Remove from Wishlist
          </Text>
        </View>
        <View style={{display: 'flex', justifyContent: 'center',marginBottom:hp(2)}}>
          <Text style={{fontFamily: 'ProductSans-Regular'}}>
            16 item(s) will be removed from your wishlist.
          </Text>
          <Text>Are you sure you want to continue?</Text>
        </View>
        <View
          style={{flexDirection: 'row', justifyContent: 'flex-end',paddingVertical:hp(1)}}>
          <Pressable
            style={{padding: hp(2)}}
            onPress={() => props.setShowModal()}>
            <Text
              style={{fontFamily: 'ProductSans-Regular', fontWeight: 'bold'}}>
              CANCEL
            </Text>
          </Pressable>
          <Pressable onPress={handlePress} style={{padding: hp(2)}}>
            <Text
              style={{
                fontFamily: 'ProductSans-Regular',
                fontWeight: 'bold',
                color: '#fb56c1',
              }}>
              REMOVE
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default RemoveAllModal;
