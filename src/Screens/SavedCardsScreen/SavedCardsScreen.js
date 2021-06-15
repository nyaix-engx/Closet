import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import CreditCard from '../../Components/CreditCard';
import LottieView from 'lottie-react-native';
import {cardData} from '../../Utils/arrays';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../Components/Button';
import {
  Transitioning,
  Transition
} from 'react-native-reanimated';

const SavedCardsScreen = ({navigation, route}) => {
  const [cards, setCards] = useState(cardData);
  const scrollRef = useRef();
  const [scrollY, setScrollY] = useState(0);
  const savedScreenRef = useRef();
  const handleScroll = e => {
    setScrollY(e.nativeEvent.contentOffset.y);
  };
  useEffect(() => {
    if (route.params?.cards) {
      setCards(route.params.cards);
    }
  }, [route.params?.cards]);
  const transition = (
    <Transition.Sequence>
      <Transition.Out
        type="fade"
        durationMs={400}
        interpolation="easeOut"
      />
    </Transition.Sequence>
  );
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
              <LottieView
                source={require('../../Assets/lottie/visa_master.json')}
                style={{height: hp(15), width: hp(15)}}
                autoPlay
                loop={false}
              />
            </View>
            <View style={{paddingVertical: hp(2)}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'RalewayRoman-Regular',
                  fontSize: hp(1.8),
                  fontWeight:"600",
                  marginBottom: hp(1),
                }}>
                SAVE YOUR CREDIT/DEBIT CARDS
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'ArchitectsDaughter-Regular',
                  color:'grey',
                  fontSize: hp(1.8),
                }}>
                It's convenient to pay with saved cards.
              </Text>
            </View>
            <View style={{paddingVertical: hp(3), alignItems: 'center'}}>
              <Pressable
                onPress={() =>
                  navigation.navigate('AddCardPage', {
                    type: 'ADD',
                    cards,
                  })
                }
                style={{
                  backgroundColor: 'white',
                  paddingVertical: hp(1.5),
                  paddingHorizontal: hp(5),
                  borderColor: '#e0e0e0',
                  borderWidth: hp(0.1),
                }}>
                <Text
                  style={{
                    color: 'blue',
                    fontFamily: 'Poppins-Medium',
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
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            bounces={false}>
            <Transitioning.View
              style={{paddingHorizontal: hp(2), paddingVertical: hp(2)}}
              transition={transition}
              ref={savedScreenRef}>
              <View style={{paddingHorizontal:hp(2)}}>
                <ScaleAnimation
                  onPress={() =>
                    navigation.navigate('AddCardPage', {
                      type: 'ADD',
                      cards,
                    })
                  }
                  scaleTo={0.9}>
                  <Button
                    viewProps={{
                      backgroundColor: '#fb7ca0',
                      paddingVertical: hp(1.8),
                      borderRadius: hp(0.5),
                      marginBottom: hp(2),
                    }}>
                    <Entypo
                      name="add-to-list"
                      size={hp(3)}
                      style={{color: '#ffffff'}}
                    />
                    <Text
                      style={{
                        fontFamily: 'RalewayRoman-Regular',
                        fontWeight: '600',
                        fontSize: hp(1.9),
                        paddingHorizontal: hp(2),
                        textAlign: 'center',
                        color: '#ffffff',
                      }}>
                      ADD CARD
                    </Text>
                  </Button>
                </ScaleAnimation>
              </View>
              <View>
                {cards.map((data, index) => {
                  return (
                    <CreditCard
                      data={data}
                      key={index}
                      index={index}
                      cards={cards}
                      setCards={setCards}
                      scrollY={scrollY}
                      scrollRef={scrollRef}
                      savedScreenRef={savedScreenRef}
                    />
                  );
                })}
              </View>
            </Transitioning.View>
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
