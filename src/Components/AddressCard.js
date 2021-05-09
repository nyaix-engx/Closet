import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AddressCard = (props) => {
  return (
    <View style={{padding: hp(2), backgroundColor: 'white',marginBottom:hp(2)}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: hp(2),
        }}>
        <Text style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
          Alex Benjamin
        </Text>
        <View
          style={{
            backgroundColor: '#cfcfcf',
            paddingHorizontal: hp(1),
            paddingVertical: hp(0.5),
            borderRadius: hp(2),
          }}>
          <Text style={{fontSize: hp(1.6), fontFamily: 'ProductSans-Bold'}}>
            HOME
          </Text>
        </View>
      </View>
      <View style={{marginBottom: hp(2)}}>
        <Text style={{fontFamily: 'ProductSans-Regular', fontSize: hp(1.9)}}>
          B-3, Ashok Vihar, East of Sainik Farm, New Delhi-81 Khanpur (South
          Delhi)
        </Text>
        <Text style={{fontFamily: 'ProductSans-Regular', fontSize: hp(1.9)}}>
          South Delhi - 110081
        </Text>
        <Text
          style={{
            fontFamily: 'ProductSans-Regular',
            fontSize: hp(1.9),
            marginBottom: hp(2),
          }}>
          New Delhi
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              fontSize: hp(1.9),
            }}>
            Mobile: 8748279065
          </Text>
          {!props.default && (
            <Pressable>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(1.7),
                  color: '#34a880',
                }}>
                SET AS DEFAULT
              </Text>
            </Pressable>
          )}
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            borderTopColor: '#cfcfcf',
            borderTopWidth: hp(0.1),
            paddingTop: hp(1),
          }}>
          <Pressable
            style={{
              flex: 1,
              borderRightColor: '#cfcfcf',
              borderRightWidth: hp(0.05),
              paddingVertical: hp(1),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'ProductSans-Bold',
                fontSize: hp(2),
                color: 'blue',
              }}>
              EDIT
            </Text>
          </Pressable>
          <Pressable
            style={{
              flex: 1,
              borderLeftColor: '#cfcfcf',
              borderLeftWidth: hp(0.05),
              paddingVertical: hp(1),
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'ProductSans-Bold',
                fontSize: hp(2),
                color: 'blue',
              }}>
              REMOVE
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AddressCard;
