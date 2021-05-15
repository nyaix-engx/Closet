import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Number from './number';
import {useSafeAreaInsets} from 'react-native-safe-area-context';


const SelectQuantityModal = props => {
  const [selected,setSelected]=useState(null);
  const insets=useSafeAreaInsets()
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
      <View style={{backgroundColor: 'white', paddingTop:hp(2),paddingHorizontal:hp(2)}}>
        <View
          style={{
            paddingHorizontal: hp(1),
            alignItems:'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(2),
              marginBottom: hp(2),
            }}>
            Select Quantity
          </Text>
          <Pressable onPress={props.setShowModal} style={{marginBottom:hp(2)}}>
            <Fontisto
              name="plus-a"
              size={hp(2.5)}
              style={{transform: [{rotateZ: '45deg'}],padding:hp(0.8)}}
            />
          </Pressable>
        </View>
        <View style={{marginBottom:hp(2)}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} >
              <Number selected={selected} setSelected={setSelected} size={1} />
              <Number selected={selected} setSelected={setSelected} size={2} />
              <Number selected={selected} setSelected={setSelected} size={3} />
              <Number selected={selected} setSelected={setSelected} size={4} />
              <Number selected={selected} setSelected={setSelected} size={5} />
              <Number selected={selected} setSelected={setSelected} size={6} />
              <Number selected={selected} setSelected={setSelected} size={7} />
            </ScrollView>
        </View>
        <Pressable style={{backgroundColor:'#fb7ca0',paddingVertical:hp(1.4),borderRadius:hp(0.3),marginBottom:insets.bottom}}>
          <Text style={{textAlign:'center',fontSize:hp(2),fontFamily:'ProductSans-Bold',color:'white'}}>DONE</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default SelectQuantityModal;
