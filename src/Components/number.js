import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Number = ({state,selected,setSelected,size}) => {

  return (
    <Pressable onPress={()=>setSelected(size)}>
    <View
      style={{
        borderRadius: hp(4),
        height: hp(7),
        width: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: hp(0.06),
        borderColor: selected===size?'#fb7ca0':'black',
        marginHorizontal: hp(1),
      }}>
      <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2),color:selected===size?'#fb7ca0':'black'}}>{size}</Text>
    </View>
    </Pressable>
  );
};

export default Number;
