import React, {useEffect, useRef} from 'react';
import {View, Text, Pressable, Dimensions, Platform} from 'react-native';
import Animated, {EasingNode} from 'react-native-reanimated';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSafeAreaInsets,SafeAreaView} from 'react-native-safe-area-context';

const ModalContent = (props) => {
  const {height,width}=Dimensions.get('window')
  const insets = useSafeAreaInsets();
  switch (props.animationType) {
    case 'FadeInTopToBot':
      var opacity = useRef(new Animated.Value(0));
      var translateY = useRef(new Animated.Value(hp(-20)));
      break;
    case 'BottomToTop':
      if(props.height){
        var similarTranslateY = useRef(new Animated.Value(props.height));
      }else{
        if(Platform.OS==='ios'){
          var similarTranslateY = useRef(new Animated.Value(height-insets.top-insets.bottom));
        }else{
          var similarTranslateY = useRef(new Animated.Value(height));
        }
      }
      break;
    case 'ExpandContract':
    default:
      var modalHeight = useRef(new Animated.Value(hp(0)));
      break;
  }
  useEffect(() => {
    if (props.showModal && props.showContent) {
      if (props.animationType === 'FadeInTopToBot') {
        showFTBAnimation(1, hp(0));
      } else 
      if (props.animationType === 'BottomToTop') {
        showBTTAnimation(0);
      } else {
        showECAnimation(props.height);
      }
    } else if (!props.showModal && props.showContent) {
      if (props.animationType === 'FadeInTopToBot') {
        showFTBAnimation(0, hp(-20));
      } else 
      if (props.animationType === 'BottomToTop') {
        showBTTAnimation(props.height || height);
      } else {
        showECAnimation(hp(0));
      }
    }
  }, [props.showModal]);

  const getPosition = () => {
    switch (props.position) {
      case 'middle':
        if (Platform.OS === 'android') {
          return (height - props.height) / 2;
        } else {
          return (height - props.height) / 2 - insets.top - hp(2.5);
        }
      case 'bottom':
      default:
        return Platform.OS==='android'? 0: -insets.bottom;
    }
  };
  const getHeight=()=>{
    if(props.height){
      return props.height
    }else{
      if(Platform.OS==='android'){
        return '100%'
      }else{
        return height-insets.top-insets.bottom
      }
    }
  }
  const getWidth=()=>{
    if(props.width){
      return `${props.width}%`
    }else{
      return '100%'
    }
  }
  const getStyles = () => {
    var style = {
      position: 'absolute',
      bottom: getPosition(),
      height: getHeight(),
      marginBottom: props.isTabView? insets.top:0,
      borderTopLeftRadius: props.borderTopLeftRadius || 0,
      borderTopRightRadius: props.borderTopRightRadius || 0,
      borderBottomLeftRadius: props.borderBottomLeftRadius || 0,
      borderBottomRightRadius: props.borderBottomRightRadius || 0,
      backgroundColor: 'white',
      left: `${(100 - (props.width || 100)) / 2}%`,
      zIndex: 3,
      width: getWidth(),
    };

    switch (props.animationType) {
      case 'FadeInTopToBot':
        style.opacity = opacity.current;
        style.transform = [{translateY: translateY.current}];
        return style;
      case 'BottomToTop':
        style.transform = [{translateY: similarTranslateY.current}];
        return style;
      case 'ExpandContract':
      default:
        style.height = modalHeight.current;
        return style;
    }
  };
  const showECAnimation = (toValue) => {
    Animated.timing(modalHeight.current, {
      toValue,
      duration: props.animationTime || 250,
      easing: EasingNode.ease,
    }).start();
  };

  const showBTTAnimation = (translateYValue) => {
    Animated.timing(similarTranslateY.current, {
      toValue: translateYValue,
      duration: props.animationTime || 300,
      easing: EasingNode.ease,
    }).start();
  };

  const showFTBAnimation = (opacityValue, translateYValue) => {
    Animated.timing(opacity.current, {
      toValue: opacityValue,
      duration: props.animationTime || 300,
      easing: EasingNode.ease,
    }).start();
    Animated.timing(translateY.current, {
      toValue: translateYValue,
      duration: props.animationTime || 300,
      easing: EasingNode.ease,
    }).start();
  };
  return (
    <SafeAreaView
      style={{
        position: 'absolute',
        top: Platform.OS==='ios'? insets.top:0,
        left: 0,
        right: 0,
        width: '100%',
        height: Platform.OS==='android'?'100%': height-insets.top-insets.bottom,
        bottom: 0,
        backgroundColor: `rgba(0, 0, 0, ${props.opacity || 0.5})`,
      }}>
      <View style={{width: '100%', height: '100%', position: 'relative'}}>
        <Pressable
          onPress={props.setShowModal}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
        <Animated.View style={getStyles()}>{props.children}</Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default ModalContent;
