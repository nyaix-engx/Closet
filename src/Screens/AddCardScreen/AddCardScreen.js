import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {Datepicker, Avatar, Input} from '@ui-kitten/components';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';
import BackButtonTitle from '../../Components/BackButtonTitle';

const AddCardScreen = ({navigation}) => {
  const _onChange=(data)=>{
    console.log("Dta",data)
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ADD CARD" />
      </View>
      <View
        style={{
          flex: 8,
          paddingHorizontal: hp(2),
          paddingVertical: hp(2),
          backgroundColor: 'white',
        }}>
        <View style={{marginBottom: hp(4), paddingVertical: hp(2)}}>
          <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.1)}}>
            Add New Credit/ Debit Card
          </Text>
        </View>
        <CreditCardInput
          onChange={_onChange}
          requiresName
          allowScroll	
          requiresCVC={false}	
          labelStyle={{fontFamily: 'ProductSans-Bold', fontSize: hp(1.7)}}
          inputStyle={{fontFamily: 'ProductSans-Regular', fontSize: hp(1.9)}}
          inputContainerStyle={{borderBottomColor:'#cfcfcf',borderBottomWidth:hp(0.1)}}
          additionalInputsProps={
           {
             number:{
               maxLength:19
             },
             name:{
               maxLength:40
             }
           }
          }	
        />
        <View style={{paddingVertical:hp(5),paddingHorizontal:hp(2)}}>
          <Pressable style={{backgroundColor:'#34a880',borderRadius:hp(0.2)}}>
            <Text style={{textAlign:'center',paddingVertical:hp(1.5),fontFamily:'ProductSans-Bold',fontSize:hp(2),color:'white'}}>Save</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;
