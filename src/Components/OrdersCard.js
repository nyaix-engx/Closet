import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ReviewStars from './ReviewStars';
import { useNavigation } from '@react-navigation/native';
import OrderCardItem from './WishlistScreenComps/OrderCardItem';

const OrdersCard = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingVertical: hp(1),
        backgroundColor: 'white',
        paddingHorizontal: hp(2),
      }}>
      <View
        style={{
          height: hp(6),
          display: 'flex',
          flexDirection: 'row',
          marginBottom: hp(1),
        }}>
        <View
          style={{
            width: hp(7),
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMethod="resize"
            source={require('../Assets/Images/delivery.png')}
            style={{width: '70%', height: '70%'}}
          />
        </View>
        <View
          style={{
            flex: 4,
            display: 'flex',
            justifyContent: 'center',
            paddingHorizontal: hp(1),
          }}>
          <Text
            style={{
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(2),
              marginBottom: hp(0.3),
            }}>
            Delivered
          </Text>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              fontSize: hp(1.8),
              color: 'grey',
            }}>
            On Tue, 15 Jan 2019
          </Text>
        </View>
      </View>
      <OrderCardItem title="HRX by Hrithik Roshan" subtitle="Ultralyte Men Red Polo" size="M" image={require('../Assets/Images/polo.png')} />      
      <View style={{paddingVertical: hp(1),flexDirection:'row'}}>
        <View style={{flex: 3}}>
          <ReviewStars/>
        </View>
        <Pressable onPress={()=>navigation.navigate('WriteReviewPage')} style={{flex: 2, justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'ProductSans-Bold',fontSize:hp(2),color:'#fb56c1'}}>Write a Review</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OrdersCard;
