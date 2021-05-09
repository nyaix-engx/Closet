import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import AddressCard from '../Components/AddressCard';
import BackButtonTitle from '../Components/BackButtonTitle';

const AddressScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ADDRESS" />
      </View>
      <View style={{flex: 8}}>
        <View style={{padding: hp(2)}}>
          <Pressable
            onPress={()=>navigation.navigate('AddNewAddressPage')}
            style={{
              backgroundColor: 'white',
              padding: hp(2),
              borderWidth: hp(0.1),
              borderColor: '#cfcfcf',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: hp(0.2),
            }}>
            <Entypo
              name="add-to-list"
              size={hp(3)}
              style={{marginRight: hp(1), color: 'blue'}}
            />
            <Text
              style={{
                fontFamily: 'ProductSans-Bold',
                fontSize: hp(2),
                color: 'blue',
              }}>
              ADD NEW ADDRESS
            </Text>
          </Pressable>
        </View>
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <View style={{marginBottom: hp(1)}}>
            <View style={{paddingHorizontal: hp(2), paddingVertical: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(2),
                }}>
                DEFAULT ADDRESS
              </Text>
            </View>
            <AddressCard default />
          </View>
          <View>
            <View style={{paddingHorizontal: hp(2), paddingVertical: hp(1)}}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(2),
                }}>
                OTHER ADDRESSES
              </Text>
            </View>
            <AddressCard />
            <AddressCard />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddressScreen;
