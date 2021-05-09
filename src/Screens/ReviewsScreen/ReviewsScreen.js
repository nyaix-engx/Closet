import React, {useState} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Layout, Select, SelectItem} from '@ui-kitten/components';
import CustomerReview from '../../Components/CustomerReviewComp';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';

const ReviewsScreen = () => {
  const navigation = useNavigation();
  const [display, setDisplay] = useState('none');
  const [sort, setSort] = useState('Most Helpful');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: hp(8),
          backgroundColor: 'white',
          borderBottomWidth: hp(0.1),
          borderBottomColor: '#c9c9c9',
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{paddingVertical: hp(1)}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              width: hp(6),
              height: hp(2),
              alignItems: 'center',
            }}>
            <Ionicons name="ios-arrow-back" size={hp(2.8)} />
          </View>
        </Pressable>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.2)}}>
            Rating & Reviews
          </Text>
        </View>
      </View>
      <ScrollView
        bounces={false}
        style={{
          paddingVertical: hp(2),
          paddingHorizontal: hp(2),
          backgroundColor: 'white',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 2}}>
            <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(1.9)}}>
              Customer Reviews (934)
            </Text>
          </View>
        </View>
        <View>
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewsScreen;
