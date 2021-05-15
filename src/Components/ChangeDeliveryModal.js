import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


const Address = props => {
  return (
    <Pressable
      style={{padding: hp(2), backgroundColor: '#e3e3e3', marginBottom: hp(2),borderRadius:hp(1)}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: hp(2),
        }}>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Text style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold',marginRight:hp(0.5)}}>
            Alex Benjamin
          </Text >
          {props.default && <Text style={{fontSize: hp(2), fontFamily: 'ProductSans-Regular'}}>(Default)</Text>}
        </View>

        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: hp(1),
            paddingVertical: hp(0.5),
            borderRadius: hp(2),
            borderWidth: hp(0.1),
            borderColor: '#34a880',
          }}>
          <Text
            style={{
              fontSize: hp(1.6),
              fontFamily: 'ProductSans-Bold',
              color: '#34a880',
            }}>
            HOME
          </Text>
        </View>
      </View>
      <View>
        <Text style={{fontFamily: 'ProductSans-Regular', fontSize: hp(1.9)}}>
          B-3, Ashok Vihar, East of Sainik Farm, New Delhi-81 Khanpur (South
          Delhi)
        </Text>
        <Text style={{fontFamily: 'ProductSans-Regular', fontSize: hp(1.9)}}>
          South Delhi - 110081
        </Text>
        <Text
          style={{
            fontFamily: 'ProductSans-Regular',
            fontSize: hp(1.9),
            marginBottom: hp(1),
          }}>
          New Delhi
        </Text>
      </View>
    </Pressable>
  );
};

const ChangeDeliveryModal = props => {
  const [selected, setSelected] = useState(null);
  const navigation=useNavigation()
  const insets = useSafeAreaInsets();
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
          maxHeight:hp(50)
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
            Change Delivery Address
          </Text>
          <Pressable onPress={props.setShowModal} style={{marginBottom: hp(2)}}>
            <Fontisto
              name="plus-a"
              size={hp(2.5)}
              style={{transform: [{rotateZ: '45deg'}], padding: hp(0.8)}}
            />
          </Pressable>
        </View>
        <ScrollView style={{marginBottom:hp(2)}} showsVerticalScrollIndicator={false} bounces={false}>
          <Address default />
          <Address default />
          <Address default />
        </ScrollView>
        <Pressable
          onPress={()=>{props.setShowModal();navigation.navigate('AddNewAddressPage')}}
          style={{
            backgroundColor: '#34a880',
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
            ADD NEW ADDRESS
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ChangeDeliveryModal;
