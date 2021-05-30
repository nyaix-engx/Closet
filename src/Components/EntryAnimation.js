import React,{useEffect} from 'react';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withDelay, withTiming,interpolate, Easing } from 'react-native-reanimated';

const EntryAnimation=({children,index})=>{
    const animate=useSharedValue(false)
    useEffect(()=>{
        animate.value=true
    })
    const progress=useDerivedValue(()=>{
        return animate.value ? withDelay(index*(50||0),withTiming(100,{duration:400,easing:Easing.linear})):0
    })

    const animatedStyle=useAnimatedStyle(()=>{
        const translateY=interpolate(progress.value,[0,100],[100,0])
        const opacity=interpolate(progress.value,[0,100],[0,1])
        return {
            transform:[{translateY}],
            opacity
        }
    })

    return (<Animated.View style={animatedStyle}>
        {children}
    </Animated.View>)
}

export default EntryAnimation