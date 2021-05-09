import React,{useState} from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SizeSelectModal from './SizeSelectModal';
import Modal from 'react-native-modal';

const ShoppingBagCard = () => {
  const {width} = useWindowDimensions();
  const [showSizeModal,setShowSizeModal]=useState(false)
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{height: hp(30), paddingHorizontal: hp(1), backgroundColor: 'white',borderRadius:hp(0.5),borderColor:'#fb7ca0',borderWidth:hp(0.1),marginBottom:hp(1)}}>
      <View
        style={{
          flex: 5,
          display: 'flex',
          flexDirection: 'row',
          borderBottomColor: '#757575',
          borderBottomWidth: hp(0.05),
          paddingVertical: hp(1),
        }}>
        <View style={{flex: 4}}>
          <Image
            source={require('../Assets/Images/men.jpg')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            flex: 6,
            paddingHorizontal: hp(1),
          }}>
          <View style={{marginBottom: hp(1.5)}}>
            <Text
              style={{
                fontSize: hp(1.8),
                fontWeight: 'bold',
                marginBottom: hp(0.3),
              }}>
              Jack & Jones
            </Text>
            <Text
              style={{
                fontFamily: 'ProductSans-Regular',
                marginBottom: hp(0.3),
              }}>
              Men Blue Ben Skinny Fit
            </Text>
            <Text style={{fontFamily: 'ProductSans-Regular', color: 'grey'}}>
              Sold By: BEST UNITED PVT LTD
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: hp(1),
            }}>
            <Pressable
              onPress={()=>setShowSizeModal(true)}
              style={{
                alignSelf: 'flex-start',
                paddingHorizontal: hp(0.5),
                paddingVertical: hp(0.5),
                borderRadius: hp(0.2),
                marginRight: hp(1),
                backgroundColor:'#d4d4d4'
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: hp(1.6), fontWeight: 'bold'}}>
                  Size: 6.5
                </Text>
                <Ionicons name="caret-down-sharp" size={hp(1.5)} />
              </View>
            </Pressable>
            <Pressable
              style={{
                alignSelf: 'flex-start',
                paddingHorizontal: hp(0.5),
                paddingVertical: hp(0.5),
                borderRadius: hp(0.2),
                backgroundColor:'#d4d4d4'
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: hp(1.6), fontWeight: 'bold'}}>
                  Qty: 1
                </Text>
                <Ionicons name="caret-down-sharp" size={hp(1.5)} />
              </View>
            </Pressable>
          </View>
          <View>
            <Text style={{fontSize: hp(1.8), fontWeight: 'bold'}}>$43</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1.5, display: 'flex', flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'row', paddingVertical: hp(0.5)}}>
          <Pressable
            style={{
              flex: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRightColor: '#757575',
              borderRightWidth:hp(0.025)
            }}>
            <Text style={{fontFamily: 'ProductSans-Bold'}}>REMOVE</Text>
          </Pressable>
          <Pressable
            style={{
              flex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeftColor: '#757575',
              borderLeftWidth:hp(0.025)
            }}>
            <Text style={{fontFamily: 'ProductSans-Bold',color:'#fb7ca0'}}>
              MOVE TO WISHLIST
            </Text>
          </Pressable>
        </View>
      </View>
      <SizeSelectModal
        showSizeModal={showSizeModal}
        setShowSizeModal={() => setShowSizeModal(false)}
        position="middle"
        animationType="BottomToTop"
        height={hp(50)}
        animationTime={250}
      />    
      {/* <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <Text>Hello!</Text>

          <Pressable onPress={toggleModal} >
            <Text>Hide</Text>
            </Pressable>
        </View>
      </Modal> */}
      </View>
  );
};

export default ShoppingBagCard;
