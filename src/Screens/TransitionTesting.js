import React from 'react';
import {View,Text,Pressable, SafeAreaView, StyleSheet} from 'react-native';
import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useEffect } from 'react/cjs/react.development';

const TimeConfigurations = {duration: 50, easing: Easing.linear};

const ScaleAnimation=({onPress, children, scaleTo, disabled})=>{
  const pressed=useSharedValue(false) //sharedValue is reactive, any change in the shared value retriggers the animation

  const progress = useDerivedValue(() => {
    return pressed.value
      ? withTiming(1, TimeConfigurations)
      : withTiming(0, TimeConfigurations);
  });
  const scaleAnimationStyle=useAnimatedStyle(()=>{

    const scale=interpolate(progress.value,[0,1],[1,scaleTo],Extrapolate.CLAMP)
    return {
      transform:[{scale}]
    }
  })
  return (<Pressable onPressIn={()=>pressed.value=true} onPressOut={()=>pressed.value=false} onPress={()=>{}} disabled={disabled}>
    <Animated.View style={scaleAnimationStyle}>{children}</Animated.View>
  </Pressable>)
}


function Button({backgroundColor = 'tomato', children}) {
  return (
    <View
      style={[
        styles.button,
        {
          height: 80,
          width: 250,
          backgroundColor,
        },
      ]}>
      <Text style={{fontSize: 30}}>{children}</Text>
    </View>
  );
}



const Hello=()=>{
  return <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ScaleAnimation onPress={()=>{console.log("hello")}} scaleTo={0.9}>
          <Button>Helllo</Button>
      </ScaleAnimation>
  </SafeAreaView>
}

export default Hello

const styles=StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: hp(0.5),
    },
    shadowOpacity: hp(0.06),
    shadowRadius: hp(0.5),
    elevation: hp(1),
  },
})

// import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
// import Animated, {withRepeat,  useSharedValue,interpolate, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
// import React from 'react';
// import { useEffect } from 'react/cjs/react.development';

// const App= () => {

//   const animation = useSharedValue(0)

//   const rotation = useDerivedValue(() => {

//     return interpolate(animation.value,
//       [0,360],
//       [0,360])
//   })

//   const animationStyle = useAnimatedStyle(() => {
//     return{

//       transform:[
//         {
//           rotate: animation.value + 'deg'
//         }
//       ]
//     }
//   })

//   useEffect(()=>{
//     animation.value = withRepeat(withTiming(90,{
//       duration:1200
//     }),
//     -1,
//     )
//   },[])
//   return (
//     <View style={styles.container}>
//       <TouchableWithoutFeedback onPress={()=>}>
//         <Animated.View style={[styles.box,animationStyle]} />
//       </TouchableWithoutFeedback>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: '#631d94'
//   }
// });

// export default App;