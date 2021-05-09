import React, {useState} from 'react';
import {View, Text, Pressable, Image, TextInput} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import BackButtonTitle from '../../Components/BackButtonTitle';
import ReviewStars from '../../Components/ReviewStars';

const WriteReviewScreen = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="WRITE REVIEW"/>
      </View>
      <View style={{flex: 8, paddingVertical: hp(2)}}>
        <View
          style={{
            paddingHorizontal: hp(2),
            paddingVertical: hp(2),
            height: hp(14),
            flexDirection: 'row',
            marginBottom: hp(2),
          }}>
          <View style={{height: '100%', width: hp(10)}}>
            <Image
              source={require('../../Assets/Images/polo.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: hp(1),
            }}>
            <Text style={{fontFamily: 'ProductSans-Regular', fontSize: hp(2)}}>
              HRX by Hrithik Roshan Ultralyte Men Yellow Running Regular Polo
            </Text>
            <ReviewStars size={hp(2)} />
          </View>
        </View>
        <View style={{paddingHorizontal: hp(2),marginBottom:hp(3)}}>
          <Text
            style={{
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(2.2),
              marginBottom: hp(2),
            }}>
            Write your review here
          </Text>
          <TextInput
            style={{
              fontFamily:'ProductSans-Regular',
              height: hp(35),
              paddingTop: hp(2),
              padding: hp(2),
              paddingRight: hp(2),
              paddingBottom: hp(2),
              fontSize: hp(2.2),
              borderWidth:hp(0.1),
              borderColor:'grey'
            }}
            numberOfLines={10}
            multiline
            scrollEnabled
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Please write product review here."
          />
        </View>
        <View style={{paddingHorizontal: hp(2),marginBottom:hp(3)}}>
            <Pressable style={{backgroundColor:'#e3e3e3',paddingVertical:hp(2)}}>
                <Text style={{textAlign:'center',fontFamily:'ProductSans-Bold',fontSize:hp(2)}}>SUBMIT</Text>
            </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WriteReviewScreen;
