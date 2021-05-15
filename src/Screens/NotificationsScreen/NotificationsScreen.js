import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';


const NotificationsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="NOTIFICATIONS" />
      </View>
      <View style={{flex: 8}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(50),
          }}>
          <LottieView source={require('../../Assets/lottie/empty.json')} style={{height:hp(15),width:hp(15)}} autoPlay loop={false} />
          <View style={{paddingVertical:hp(2)}}>
            <Text
              style={{
                fontSize: hp(2),
                fontFamily: 'ProductSans-Regular',
                color: 'grey',
              }}>
              No Notifications here
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;
