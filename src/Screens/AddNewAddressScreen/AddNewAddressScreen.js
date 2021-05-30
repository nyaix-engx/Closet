import React, {useState} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import {Input, Radio, RadioGroup, CheckBox} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButtonTitle from '../../Components/BackButtonTitle';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';

const AddNewAddressScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [town, setTown] = useState('');
  const [city, setCity] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openSat, setOpenSat] = useState(false);
  const [openSun, setOpenSun] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ADD NEW ADDRESS" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal: hp(2),
              paddingVertical: hp(4),
              backgroundColor: 'white',
              marginTop: hp(2),
              marginBottom: hp(2),
            }}>
            <Input
              value={name}
              style={{marginBottom: hp(2)}}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              placeholder="Name"
              onChangeText={nextValue => setName(nextValue)}
            />
            <Input
              value={mobile}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              placeholder="Mobile"
              onChangeText={nextValue => setMobile(nextValue)}
            />
          </View>
          <View
            style={{
              paddingHorizontal: hp(2),
              paddingVertical: hp(4),
              backgroundColor: 'white',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: hp(2),
              }}>
              <Input
                style={{width: '45%'}}
                value={pincode}
                textStyle={{
                  paddingVertical: hp(1),
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                }}
                placeholder="Pincode"
                onChangeText={nextValue => setPincode(nextValue)}
              />
              <Input
                style={{width: '45%'}}
                value={state}
                textStyle={{
                  paddingVertical: hp(1),
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                }}
                placeholder="State"
                onChangeText={nextValue => setState(nextValue)}
              />
            </View>
            <Input
              value={address}
              style={{marginBottom: hp(2)}}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              placeholder="Address (House No, Building, Street, Area)"
              onChangeText={nextValue => setAddress(nextValue)}
            />
            <Input
              value={town}
              style={{marginBottom: hp(2)}}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              placeholder="Locality/ Town"
              onChangeText={nextValue => setTown(nextValue)}
            />
            <Input
              value={city}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              placeholder="City/ District"
              onChangeText={nextValue => setCity(nextValue)}
            />
          </View>
          <View
            style={{
              paddingHorizontal: hp(2),
              paddingTop: hp(3),
              backgroundColor: 'white',
              marginBottom: hp(2),
            }}>
            <View style={{marginBottom: hp(2)}}>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Regular',
                  marginBottom: hp(1),
                }}>
                Type of Address
              </Text>
              <RadioGroup
                selectedIndex={selectedIndex}
                style={{flexDirection: 'row'}}
                onChange={index => setSelectedIndex(index)}>
                <Radio
                  style={{marginRight: hp(3)}}
                  children={() => (
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Regular',
                        fontSize: hp(2),
                        paddingHorizontal: hp(1),
                      }}>
                      Home
                    </Text>
                  )}
                />
                <Radio
                  children={() => (
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Regular',
                        fontSize: hp(2),
                        paddingHorizontal: hp(1),
                      }}>
                      Office
                    </Text>
                  )}
                />
              </RadioGroup>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'ProductSans-Regular',
                  fontSize: hp(2),
                  marginBottom: hp(2),
                }}>
                Is your office open on weekends?
              </Text>
              <View style={{marginBottom: hp(2)}}>
                <CheckBox
                  checked={openSat}
                  onChange={nextChecked => setOpenSat(nextChecked)}
                  style={{marginBottom: hp(1.5)}}
                  children={() => (
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Regular',
                        fontSize: hp(2),
                        paddingHorizontal: hp(1.5),
                      }}>
                      Open on Saturday
                    </Text>
                  )}
                />
                <CheckBox
                  checked={openSun}
                  onChange={nextChecked => setOpenSun(nextChecked)}
                  children={() => (
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Regular',
                        fontSize: hp(2),
                        paddingHorizontal: hp(1.5),
                      }}>
                      Open on Sunday
                    </Text>
                  )}
                />
              </View>
              <View
                style={{
                  paddingVertical: hp(3),
                  borderTopColor: '#c7c7c7',
                  borderTopWidth: hp(0.1),
                }}>
                <CheckBox
                  checked={openSun}
                  onChange={nextChecked => setOpenSun(nextChecked)}
                  children={() => (
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Regular',
                        fontSize: hp(2),
                        paddingHorizontal: hp(1.5),
                      }}>
                      Make this as my default address
                    </Text>
                  )}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row',paddingHorizontal:hp(2),justifyContent:'space-between'}}>
          <View style={{width: '48%'}}>
            <ScaleAnimation onPress={() => navigation.goBack()} scaleTo={0.9}>
              <Button
                viewProps={{
                  paddingVertical: hp(1.8),
                  alignItems: 'center',
                  backgroundColor: 'white',
                  borderRadius:hp(0.5)
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'ProductSans-Bold',
                    fontSize: hp(2),
                  }}>
                  CANCEL
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
          <View style={{width: '48%'}}>
            <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
              <Button
                viewProps={{
                  alignItems: 'center',
                  paddingVertical: hp(1.8),
                  backgroundColor: 'grey',
                  borderRadius:hp(0.5)
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'ProductSans-Bold',
                    color: 'white',
                    fontSize: hp(2),
                  }}>
                  SAVE
                </Text>
              </Button>
            </ScaleAnimation>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNewAddressScreen;
