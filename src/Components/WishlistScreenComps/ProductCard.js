import React,{useEffect, useState} from 'react';
import {
  Pressable,
  View,
  useWindowDimensions,
  Image,
  Platform,
  Text
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const ProductCard = (props) => {
  const {width} = useWindowDimensions();
  const [originalPrice,setOriginalPrice]=useState(0)

  useEffect(()=>{
    setOriginalPrice(props.data.price + (props.data.discount*0.01*props.data.price))
  },[])
  // console.log("Props",props)
  const handlePress=()=>{
    let x=props.wishlist.filter((item,index)=>{
      return props.index!==index
    })
    props.wishlistRef.current.animateNextTransition()
    props.setWishlist([...x])
  }

  return (
    <View
      style={{
        width: (width - hp(4.6)) / 2,
        height: Platform.OS === 'ios' ? hp(40) : hp(45),
        borderRadius: hp(0.5),
        margin:hp(0.65),
        borderWidth: hp(0.1),
        borderColor: '#c7c7c7',
      }}>
      <View style={{flex: 4.2,position:'relative'}}>
        <Image
          style={{
            width: (width - hp(5)) / 2,
            height: '100%',
            borderTopLeftRadius: hp(0.5),
            borderTopRightRadius: hp(0.5),
          }}
          source={props.data.image}
        />
        <Pressable onPress={handlePress} style={{position:'absolute',right:hp(0.5),top:hp(0.5)}}><MaterialIcons name="cancel" style={{fontSize:hp(2.7),color:'#c7c7c7'}} /></Pressable>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: hp(1),
          borderBottomWidth: hp(0.1),
          borderBottomColor: '#c7c7c7',
        }}>
        <View>
          <View style={{padding: hp(0.3)}}>
            <Text
              style={{fontFamily: 'ProductSans-Regular', fontSize: hp(1.8),marginBottom:hp(0.5),fontWeight:'100'}}>
              {props.data.brand}
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
            <Text
              style={{
                fontFamily: 'ProductSans-Regular',
                marginRight: hp(0.6),
                fontWeight: 'bold',
                fontSize: hp(1.6),
              }}>
              ${props.data.price}
            </Text>
            <Text
              style={{
                fontFamily: 'ProductSans-Regular',
                marginRight: hp(0.6),
                fontSize: hp(1.6),
                textDecorationLine:'line-through'
              }}>
              ${originalPrice}
            </Text>
            <Text
              style={{
                fontFamily: 'ProductSans-Italic',
                color: '#fb7ca0',
                fontSize: hp(1.6),
              }}>
              ({props.data.discount} % OFF)
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.7,
          backgroundColor: 'white',
          borderBottomRightRadius: hp(0.5),
          borderBottomLeftRadius: hp(0.5),
        }}>
        <Pressable
          onPress={handlePress}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'ProductSans-Bold',
              fontWeight: 'bold',
              color: '#fb7ca0',
              fontSize: Platform.OS==='ios'? hp(1.4) :hp(1.6),
            }}>
            MOVE TO BAG
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductCard;
