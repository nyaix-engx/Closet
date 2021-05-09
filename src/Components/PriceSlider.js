import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {cond, set, eq, add, debug,lessOrEq, and, greaterOrEq, lessThan,round,multiply,divide } from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const PriceSlider = () => {
  const translateX = new Animated.Value(0)
  const offsetX = new Animated.Value(0)
  const gestureState = new Animated.Value(State.UNDETERMINED);
  const SLIDER_WIDTH=hp(28)
//   let lowerLimit=new Animated.Value(0)
  // const handleGesture=Animated.event([{nativeEvent:{x:translateX.current}}])
//   const handleGesture=(e)=>{
//       console.log(e.nativeEvent.translationX)
//       translateX.current=e.nativeEvent.translationX
//   }
  const transX = cond(
    eq(gestureState, State.ACTIVE),
    cond(and(greaterOrEq(add(offsetX, translateX),0),lessOrEq(add(offsetX, translateX),SLIDER_WIDTH)),add(offsetX, translateX),cond(lessThan(add(offsetX, translateX),hp(12.5)),0,SLIDER_WIDTH)),
    set(offsetX, cond(and(greaterOrEq(add(offsetX, translateX),0),lessOrEq(add(offsetX, translateX),SLIDER_WIDTH)),add(offsetX, translateX),cond(lessThan(add(offsetX, translateX),hp(12.5)),0,SLIDER_WIDTH))),
  );

  const lowerLimit=round(multiply(divide(translateX, SLIDER_WIDTH), 100));
  console.log(lowerLimit)

  const handleGesture = Animated.event([
    {
      nativeEvent: {
        translationX: translateX,
        state: gestureState,
      },
    },
  ]);
  return (
    <View style={{backgroundColor: 'grey'}}>
      <View style={{paddingHorizontal: hp(1), paddingVertical: hp(1)}}>
        <Text style={{fontSize: hp(1.8), fontFamily: 'ProductSans-Regular'}}>
          Selected Price Range
        </Text>
      </View>
      <View style={{paddingHorizontal: hp(1), paddingVertical: hp(1)}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{paddingHorizontal: hp(0.3)}}>
            <Animated.Text style={{fontSize: hp(1.8), fontFamily: 'ProductSans-Bold'}}>
              $ {lowerLimit.current}
            </Animated.Text>
          </View>
          <View style={{paddingHorizontal: hp(0.3)}}>
            <Text style={{fontSize: hp(1.8), fontFamily: 'ProductSans-Bold'}}>
              -
            </Text>
          </View>
          <View style={{paddingHorizontal: hp(0.3)}}>
            <Text style={{fontSize: hp(1.8), fontFamily: 'ProductSans-Bold'}}>
              $1000
            </Text>
          </View>
        </View>
      </View>
      <Animated.View style={{paddingHorizontal: hp(1), paddingVertical: hp(1)}}>
        <Animated.View
          style={{
            height: hp(2),
            width:SLIDER_WIDTH,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: hp(0.5),
              backgroundColor: 'red',
              borderRadius: hp(0.25),
            }}
          />
          <PanGestureHandler
            onGestureEvent={handleGesture}
            onHandlerStateChange={handleGesture}>
            <Animated.View
              style={{
                position: 'absolute',
                height: hp(2),
                width: hp(2),
                backgroundColor: 'white',
                borderRadius: hp(1),
                borderColor: 'red',
                borderWidth: hp(0.1),
                transform: [{translateX: transX}],
              }}
            />
          </PanGestureHandler>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default PriceSlider;
