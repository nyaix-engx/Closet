import React, {useState} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import CreditCard from '../../Components/CreditCard';
import LottieView from 'lottie-react-native';
import {cardData} from '../../Utils/arrays';

const SavedCardsScreen = ({navigation}) => {
  const [cards, setCards] = useState(cardData);
  console.log("Card------>",cards)
  const getContent = () => {
    return (
      <>
        {!cards.length > 0 ? (
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <View
              style={{
                height: hp(20),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <LottieView source={require('../../Assets/lottie/visa_master.json')} style={{height:hp(15),width:hp(15)}} autoPlay loop={false} />
            </View>
            <View style={{paddingVertical: hp(2)}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(2.1),
                  marginBottom: hp(1),
                }}>
                SAVE YOUR CREDIT/DEBIT CARDS
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'ProductSans-Regular',
                  fontSize: hp(1.9),
                }}>
                It's convenient to pay with saved cards.
              </Text>
            </View>
            <View style={{paddingVertical: hp(3), alignItems: 'center'}}>
              <Pressable
                onPress={() => navigation.navigate('AddCardPage',{
                  cards,
                  setCards
                })}
                style={{
                  backgroundColor: 'white',
                  paddingVertical: hp(2),
                  paddingHorizontal: hp(6),
                  borderColor: '#e0e0e0',
                  borderWidth: hp(0.1),
                }}>
                <Text
                  style={{
                    color: 'blue',
                    fontFamily: 'ProductSans-Bold',
                    fontSize: hp(2),
                  }}>
                  ADD CARD
                </Text>
              </Pressable>
            </View>
          </View>
        ) : (
          <ScrollView
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            bounces={false}>
            <View style={{padding: hp(2)}}>
              <Pressable
                onPress={()=>navigation.navigate('AddCardPage',{
                  cards,
                  setCards
                })}
                style={{
                  backgroundColor: 'white',
                  paddingVertical: hp(1.8),
                  borderWidth: hp(0.1),
                  borderColor: '#cfcfcf',
                  borderRadius: hp(0.2),
                  marginBottom: hp(2),
                }}>
                <Text
                  style={{
                    fontFamily: 'ProductSans-Bold',
                    fontSize: hp(2),
                    paddingHorizontal: hp(2),
                  }}>
                  Add Card
                </Text>
              </Pressable>
              <View>
                {cards.map((data,index)=>{
                  return <CreditCard data={data} key={index} index={index} setCards={setCards}/>
                })}
              </View>
            </View>
          </ScrollView>
        )}
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="SAVED CARDS" />
      </View>
      <View style={{flex: 8}}>{getContent()}</View>
    </SafeAreaView>
  );
};

export default SavedCardsScreen;
