import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'
import BackButtonTitle from '../../Components/BackButtonTitle';
import OrdersCard from '../../Components/OrdersCard';

const OrderScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ORDERS" />
      </View>
      <View style={{flex: 8}}>
       <ScrollView style={{paddingVertical:hp(2)}}>
           <OrdersCard/>     
       </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
