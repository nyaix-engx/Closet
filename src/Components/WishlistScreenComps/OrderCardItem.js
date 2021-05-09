import React from 'react';
import {View, Text,Pressable, Image} from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';

const OrderCardItem = ({title,subtitle,image,size}) => {
  const navigation=useNavigation()
  return (
    <Pressable
      onPress={() => navigation.navigate('ItemDetailsPage')}
      style={{
        backgroundColor: '#e0e0e0',
        paddingVertical: hp(1),
        borderRadius:hp(0.3),
        paddingHorizontal: hp(1),
        height: hp(12),
        flexDirection: 'row',
      }}> 
      <View
        style={{
          width: hp(10),
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={image}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={{flex: 8, paddingHorizontal: hp(1)}}>
        <Text
          style={{
            fontFamily: 'ProductSans-Bold',
            fontSize: hp(2),
            paddingVertical: hp(1),
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'ProductSans-Regular',
            fontSize: hp(1.9),
            color: 'grey',
          }}>
          {subtitle}
        </Text>
        <Text
          style={{
            fontFamily: 'ProductSans-Regular',
            fontSize: hp(1.9),
            color: 'grey',
          }}>
          Size: {size}
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Fontisto name="angle-right" size={hp(2)} />
      </View>
    </Pressable>
  );
};

export default OrderCardItem;
