import React, {useState, useRef, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import AddressCard from '../../Components/AddressCard';
import BackButtonTitle from '../../Components/BackButtonTitle';
import Button from '../../Components/Button';
import ScaleAnimation from '../../Components/ScaleAnimation';
import {addresses} from '../../Utils/arrays';
import LottieView from 'lottie-react-native';
import {Transitioning, Transition} from 'react-native-reanimated';

const CustomButton = ({navigation, viewStyle, textStyle,userAddresses}) => {
  return (
    <ScaleAnimation
      onPress={() => navigation.navigate('AddNewAddressPage',{type:"ADD",userAddresses})}
      scaleTo={0.9}>
      <Button viewProps={viewStyle}>
        <>
          <Entypo
            name="add-to-list"
            size={hp(3)}
            style={{marginRight: hp(1), color: '#ffffff'}}
          />
          <Text style={textStyle}>ADD NEW ADDRESS</Text>
        </>
      </Button>
    </ScaleAnimation>
  );
};

const AddressScreen = ({navigation,route}) => {
  const [userAddresses, setUserAddresses] = useState(addresses);
  const addressRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef();
  useEffect(()=>{
    if(route.params?.userAddresses){
      setUserAddresses(route.params.userAddresses)
    }
  },[route.params?.userAddresses])
  const getAddress = () => {
    return userAddresses.map((data, index) => (
      <AddressCard
        key={index}
        data={data}
        index={index}
        scrollY={scrollY}
        scrollRef={scrollRef}
        addressRef={addressRef}
        userAddresses={userAddresses}
        setUserAddresses={setUserAddresses}
      />
    ));
  };
  const handleScroll = e => {
    setScrollY(e.nativeEvent.contentOffset.y);
  };

  const transition = (
    <Transition.Sequence>
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="linear"
        />
        <Transition.Out
          type="fade"
          durationMs={300}
          interpolation="easeOut"
          // delayMs={20}
        />
      </Transition.Together>
      <Transition.Change interpolation="easeOut" durationMs={400} />
      <Transition.In type="fade" durationMs={400} />
    </Transition.Sequence>
  );
  const getContent = () => {
    if (userAddresses.length > 0) {
      return (
        <>
          <View style={{paddingHorizontal: hp(4),paddingVertical:hp(2)}}>
            <CustomButton
              userAddresses={userAddresses}
              navigation={navigation}
              textStyle={{
                fontFamily: 'RalewayRoman-Regular',
                fontSize: hp(1.8),
                fontWeight:'600',
                textAlign: 'center',
                color: '#ffffff',
              }}
              viewStyle={{
                padding: hp(1.8),
                backgroundColor: '#fb7ca0',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: hp(0.5),
              }}
            />
          </View>
          <ScrollView
            style={{flex: 1}}
            ref={scrollRef}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            bounces={false}>
            <Transitioning.View
              style={{marginBottom: hp(1), flex: 1}}
              ref={addressRef}
              transition={transition}>
              <View style={{paddingHorizontal: hp(2), paddingVertical: hp(1)}}>
                <Text
                  style={{
                    fontFamily: 'RalewayRoman-Regular',
                    fontSize: hp(1.9),
                    fontWeight:'600'
                  }}>
                  ADDRESSES
                </Text>
              </View>
              {getAddress()}
            </Transitioning.View>
          </ScrollView>
        </>
      );
    } else {
      return (
        <>
          <View style={{height: hp(15), marginVertical: hp(5)}}>
            <LottieView
              source={require('../../Assets/lottie/address.json')}
              autoPlay
              loop={false}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center',paddingHorizontal:hp(2)}}>
            <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2)}}>
              SAVE YOUR ADDRESSES NOW
            </Text>
            <Text
              style={{
                // fontFamily: 'ProductSans-Regular',
                fontSize: hp(1.8),
                textAlign: 'center',
                marginTop: hp(2),
                color: '#cfcfcf',
              }}>
              Add your home and office addresses and enjoy faster checkout
            </Text>
          </View>
          <View style={{marginVertical: hp(5), paddingHorizontal: hp(9)}}>
            <ScaleAnimation
              onPress={() => navigation.navigate('AddNewAddressPage',{type:"ADD",userAddresses})}
              scaleTo={0.9}>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingVertical: hp(1.5),
                  borderRadius: hp(0.3),
                  borderWidth: hp(0.1),
                  borderColor: '#e6e6e6',
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Entypo
                  name="plus"
                  size={hp(3)}
                  style={{marginRight: hp(1), color: 'blue'}}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'ProductSans-Bold',
                    color: 'blue',
                    fontSize:hp(1.8)
                  }}>
                  ADD NEW ADDRESS
                </Text>
              </View>
            </ScaleAnimation>
          </View>
        </>
      );
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ADDRESS" />
      </View>
      <View style={{flex: 8, backgroundColor: '#ffffff'}}>{getContent()}</View>
    </SafeAreaView>
  );
};

export default AddressScreen;
