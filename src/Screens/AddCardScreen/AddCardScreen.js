import React, {useState,useRef} from 'react';
import {View, Text, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CreditCardInput,
} from 'react-native-credit-card-input';
import BackButtonTitle from '../../Components/BackButtonTitle';

const AddCardScreen = ({route,navigation}) => {
  const [cardData,setCardData]=useState({})
  const ccRef=useRef()
  const { cards,setCards } = route.params;
  const _onChange=(data)=>{
    setCardData(data)
    // console.log("data",data)
  }

  const handlePress=()=>{
    setCards(cards.concat(cardData))
    if(cardData.valid){
      ccRef.current.setValues({cvc:'',expiry:'',number:'',name:''})
      // console.log("current",ccRef)
      setCards(cards.concat(cardData.values))
      navigation.goBack()
      // ccRef.current.focus("number")
    }
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
          ref={ccRef}
          onChange={_onChange}
          autoFocus
          requiresName
          allowScroll	
          requiresCVC
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
          <Pressable onPress={handlePress} style={{backgroundColor:'#34a880',borderRadius:hp(0.2)}}>
            <Text style={{textAlign:'center',paddingVertical:hp(1.5),fontFamily:'ProductSans-Bold',fontSize:hp(2),color:'white'}}>Save</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;
