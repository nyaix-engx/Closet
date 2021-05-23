import React, {useState} from 'react';
import {View, Text, Pressable, TextInput, ImageBackground} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import LottieView from 'lottie-react-native';
import {Input} from '@ui-kitten/components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import valid from "card-validator";
import {cardData} from '../../Utils/arrays';


const EditCardScreen = ({route, navigation}) => {
  const {data,index,setCards} = route.params;
  const [name, setName] = useState(data.name);
  const [cardNumber,setCardNumber]=useState(data.number)
  const [expiry,setExpiry]=useState(data.expiry)
  const [nameBorder,setNameBorder]=useState('green')
  const [cardBorder,setCardBorder]=useState('green')
  const [expiryBorder,setExpiryBorder]=useState('green')
  const [cardType,setCardType]=useState(data.type)
  console.log("CardType",cardData,data)
  const handlePress = () => {
    if(nameBorder === 'green' && cardBorder === 'green' && expiryBorder ==='green'){
        cardData[index].name=name
        cardData[index].number=cardNumber
        cardData[index].expiry=expiry
        cardData[index].type=cardType
        setCards([...cardData])
        navigation.goBack()
    }
  };

  const handleName=(cardHolderName)=>{
    setName(cardHolderName)
    console.log(valid.cardholderName(cardHolderName))
    if(valid.cardholderName(cardHolderName).isValid){
      setNameBorder('green')
    }else{
      setNameBorder('red')
    }
  }
  const handleCardNumber=(number)=>{
    let cardNumb=number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
    setCardNumber(cardNumb)
    valid.number(cardNumb).card?setCardType(valid.number(cardNumb).card.type):setCardType('')
    console.log(valid.number(cardNumb))
    if(valid.number(cardNumb).isValid){
      setCardBorder('green')
    }else{
      setCardBorder('red')
    }
  }
  const handleCardExpiry=(date)=>{
    let newDate=date;
    if(newDate.length>expiry.length){
      if(newDate.length<=2){
         setExpiry(newDate)
      }else{
        newDate=newDate.replace("/","")
        setExpiry(newDate.substr(0,2)+"/"+newDate.substr(2))
      }
    }else{
      setExpiry(newDate)
    }
    console.log(valid.expirationDate(date))
    if(valid.expirationDate(date).isValid){
      setExpiryBorder('green')
    }else{
      setExpiryBorder('red')
    }
  }

  const showAnimation=()=>{
    if(cardType==='visa'){
      return <LottieView
      source={require('../../Assets/lottie/visaCard.json')}
      style={{height: hp(6), width: hp(6)}}
      autoPlay
      loop={false}
    />}
    else if(cardType==='mastercard'){
      return <LottieView
      source={require('../../Assets/lottie/masterCard.json')}
      style={{height: hp(6), width: hp(6)}}
      autoPlay
      loop={false}
    />
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="EDIT CARD" />
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
            Edit Card Details
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
            {showAnimation()}
          </View>
        </ImageBackground>
          <View
            style={{
              paddingVertical: hp(2),
              backgroundColor: 'white',
            }}>
              <Input
                style={{marginBottom:hp(2),borderColor:nameBorder}}
                value={name}
                textStyle={{
                  paddingVertical: hp(1),
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                }}
                placeholder="Name on card"
                maxLength={25}
                autoCorrect={false}
                onChangeText={handleName}
              />
              <Input
                style={{marginBottom:hp(2),borderColor:cardBorder}}
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
                accessoryLeft={()=><FontAwesome name="credit-card" size={hp(2)} style={{marginRight:hp(0.5),color:'grey'}} />}
                onChangeText={handleCardNumber}
              />
            <Input
              value={expiry}
              style={{borderColor:expiryBorder}}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              placeholder="Expiry"
              maxLength={5}
              onChangeText={handleCardExpiry}
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

export default EditCardScreen;
