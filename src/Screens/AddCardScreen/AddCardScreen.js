import React, {useState, useRef} from 'react';
import {View, Text, Pressable, TextInput, ImageBackground} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import LottieView from 'lottie-react-native';
import {Input, Radio, RadioGroup, CheckBox} from '@ui-kitten/components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AddCardScreen = ({route, navigation}) => {
  const [cardData, setCardData] = useState({});
  // const {cards, setCards} = route.params;
  const [name, setName] = useState('');
  const [cardNumber,setCardNumber]=useState('')
  const [expiry,setExpiry]=useState('')
  const handlePress = () => {};
  const _handlingCardNumber=(number)=>{
    setCardNumber(number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim())
  }
  const _handlingCardExpiry=(expiry)=>{
    setExpiry(expiry.replace(/\s?/g, '').replace(/(\d{2})/g, '$1 ').trim())
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
        <View style={{marginBottom: hp(2), paddingVertical: hp(2)}}>
          <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.1)}}>
            Add New Credit/ Debit Card
          </Text>
        </View>
        <ImageBackground
          source={require('../../Assets/Images/cardBack.jpeg')}
          style={{
            height: hp(25),
            padding: hp(2),
            flexDirection: 'row',
            marginBottom: hp(2),
          }}
          imageStyle={{borderRadius: hp(2)}}>
          <View
            style={{
              width: '70%',
              height: '100%',
              justifyContent: 'space-between',

              paddingVertical: hp(1),
            }}>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(1.6),
                  marginBottom: hp(0.5),
                }}>
                NAME ON CARD
              </Text>
              <TextInput
                placeholder="XXXXXX"
                style={{fontFamily: 'ProductSans-Regular', fontSize: hp(1.8)}}
                value={name}
                onChange={e => setName(e.nativeEvent.text)}
                editable={false}
              />
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(1.6),
                  marginBottom: hp(0.5),
                }}>
                CARD NUMBER
              </Text>
              <TextInput
                placeholder="XXX XXXX XXXX XXXX"
                style={{fontFamily: 'ProductSans-Regular', fontSize: hp(1.8)}}
                value={cardNumber}
                onChange={e => setCardNumber(e.nativeEvent.text)}
                editable={false}
              />
            </View>
            <View style={{marginBottom: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(1.6),
                  marginBottom: hp(0.5),
                }}>
                MONTH/YEAR
              </Text>
              <TextInput
                placeholder="XX/XX"
                style={{fontFamily: 'ProductSans-Regular', fontSize: hp(1.8)}}
                value={expiry}
                onChange={e => setExpiry(e.nativeEvent.text)}
                editable={false}
              />
            </View>
          </View>
          <View style={{width: '30%', height: '100%', alignItems: 'center'}}>
            <LottieView
              source={require('../../Assets/lottie/visaCard.json')}
              style={{height: hp(6), width: hp(6)}}
              autoPlay
              loop={true}
            />
          </View>
        </ImageBackground>
          <View
            style={{
              paddingVertical: hp(2),
              backgroundColor: 'white',
            }}>
              <Input
                style={{marginBottom:hp(2)}}
                value={name}
                textStyle={{
                  paddingVertical: hp(1),
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                }}
                placeholder="Name on card"
                maxLength={25}
                autoCorrect={false}
                onChangeText={nextValue => setName(nextValue)}
              />
              <Input
                style={{marginBottom:hp(2)}}
                value={cardNumber}
                textStyle={{
                  paddingVertical: hp(1),
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                }}
                placeholder="Card Number"
                textContentType="creditCardNumber"
                keyboardType="number-pad"
                maxLength={19}
                accessoryLeft={()=><FontAwesome name="credit-card" size={hp(2)} style={{marginRight:hp(1),color:'grey'}} />}
                onChangeText={nextValue => _handlingCardNumber(nextValue)}
              />
            <Input
              value={expiry}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              placeholder="Expiry"
              onChangeText={nextValue => _handlingCardExpiry(nextValue)}
            />
          </View>
        <View style={{paddingVertical: hp(5), paddingHorizontal: hp(2)}}>
          <Pressable
            onPress={handlePress}
            style={{backgroundColor: '#34a880', borderRadius: hp(0.2)}}>
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: hp(1.5),
                fontFamily: 'ProductSans-Bold',
                fontSize: hp(2),
                color: 'white',
              }}>
              Save
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCardScreen;
