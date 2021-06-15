import React from 'react';
import {
  Pressable,
  View,
  useWindowDimensions,
  Image,
  Text,
  Platform,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OutOfStockProduct = (props) => {
  const {width} = useWindowDimensions();
  // console.log(props)
  const handlePress=()=>{
    let x=props.outOfStock.filter((data,index)=>{
      return props.index!==index
    })
    props.wishlistRef.current.animateNextTransition()
    props.setOutOfStock([...x])
    if(props.outOfStock.length==1){
      Platform.OS ==='ios' && props.scrollRef.current.scrollTo({y:0,animated:true})
    }
  }
  return (
    <View
      style={{
        width: (width - hp(4.6)) / 2,
        height: Platform.OS === 'ios' ? hp(40) : hp(45),
        borderRadius: hp(0.5),
        borderWidth: hp(0.1),
        margin: hp(0.65),
        borderColor: '#c7c7c7',
      }}>
      <View style={{flex: 4.2, position: 'relative'}}>
        <Image
          style={{
            width: (width - hp(5)) / 2,
            height: '100%',
            borderTopLeftRadius: hp(0.5),
            borderTopRightRadius: hp(0.5),
          }}
          source={props.data.image}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            width: (width - hp(5)) / 2,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            borderTopLeftRadius: hp(0.5),
            borderTopRightRadius: hp(0.5),
            alignItems: 'center',
          }}>
          <Text style={{color: '#a3a3a3',fontFamily:'RalewayRoman-Regular',fontWeight:"700",fontSize:hp(2)}}>OUT OF STOCK</Text>
        </View>
        <Pressable
          onPress={handlePress}
          style={{
            position: 'absolute',
            right: hp(0.5),
            top: hp(0.5),
            zIndex: 20,
          }}>
          <MaterialIcons
            name="cancel"
            style={{fontSize: hp(3), color: '#c7c7c7'}}
          />
        </Pressable>
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
          position: 'relative',
        }}>
        <View>
          <View style={{padding: hp(0.3)}}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: hp(1.6),
                marginBottom: hp(0.5),
              }}>
              {props.data.brand}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                marginRight: hp(0.6),
                fontSize: hp(1.6),
              }}>
              ${props.data.price}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
      <View
        style={{
          flex: 0.7,
          backgroundColor: 'white',
          borderBottomRightRadius: hp(0.5),
          borderBottomLeftRadius: hp(0.5),
        }}>
        <Pressable
          onPress={()=>props.setShowSimilarModal()}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'RalewayRoman-Regular',
              fontWeight: '600',
              color: '#fb7ca0',
              fontSize: Platform.OS === 'ios' ? hp(1.4) : hp(1.6),
            }}>
            SHOW SIMILAR
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OutOfStockProduct;
