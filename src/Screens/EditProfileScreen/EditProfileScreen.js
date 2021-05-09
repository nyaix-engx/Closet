import React, {useState} from 'react';
import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import {Datepicker,Avatar, Input} from '@ui-kitten/components';
import Octicons from 'react-native-vector-icons/Octicons'
import BackButtonTitle from '../../Components/BackButtonTitle';

const EditProfileScreen = ({navigation}) => {
  const [mobile, setMobile] = useState('8976567809');
  const [name, setName] = useState('Alex Mahone');
  const [email, setEmail] = useState('alex_mahone@gmail.com');
  const [gender, setGender] = useState('Male');
  const [location, setLocation] = useState('New Delhi,India');
  const [date, setDate] = useState(new Date());
  const min=new Date('January 1, 1900')
  const max=new Date()
  const CalendarIcon = (props) => (
    <Octicons name='calendar' size={hp(2.3)} style={{paddingHorizontal:hp(1),paddingVertical:hp(1)}} />
  );
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="EDIT PROFILE" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{
            backgroundColor: 'white',
            paddingVertical: hp(1),
          }}>
          <View
            style={{
              height: hp(20),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                padding: hp(0.2),
                position: 'relative',
                borderWidth: hp(0.1),
                borderColor: '#fb56c1',
                borderRadius: hp(1),
              }}>
              <Avatar
                ImageComponent={() => (
                  <Image
                    style={{
                      width: hp(15),
                      height: hp(15),
                      borderRadius: hp(1),
                    }}
                    source={require('../../Assets/Images/avatar.jpeg')}
                  />
                )}
              />
              <Feather
                name="edit"
                size={hp(2.5)}
                style={{
                  position: 'absolute',
                  right: 0,
                  padding: hp(0.5),
                  color: 'grey',
                }}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: hp(3)}}>
            <Input
              value={mobile}
              textStyle={{
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
                paddingVertical: hp(1),
              }}
              label={() => (
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    paddingVertical: hp(1),
                  }}>
                  Mobile Number
                </Text>
              )}
              onChangeText={(nextValue) => setMobile(nextValue)}
              accessoryRight={() => (
                <Pressable onPress={()=>navigation.navigate('ProfileHelperPage',{
                  topic:'CHANGE_MOBILE_NUMBER'
                })} style={{paddingHorizontal: hp(1)}}>
                  <Text
                    style={{
                      fontSize: hp(1.8),
                      fontFamily: 'ProductSans-Bold',
                      color: '#fb56c1',
                    }}>
                    CHANGE
                  </Text>
                </Pressable>
              )}
            />
          </View>
          <View style={{paddingHorizontal: hp(3)}}>
            <Input
              value={name}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              label={() => (
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    paddingVertical: hp(1),
                  }}>
                  Full Name
                </Text>
              )}
              placeholder="Place your Text"
              onChangeText={(nextValue) => setName(nextValue)}
            />
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(2)}}>
            <Input
              value={email}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              label={() => (
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    paddingVertical: hp(1),
                  }}>
                  Email
                </Text>
              )}
              onChangeText={(nextValue) => setEmail(nextValue)}
            />
          </View>
          <View
            style={{
              paddingHorizontal: hp(3),
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Pressable
              onPress={() => setGender('Male')}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                paddingVertical: hp(1.5),
                backgroundColor: gender === 'Male' ? '#fb56c1' : '#ededed',
              }}>
              <Text
                style={{
                  color: gender === 'Male' ? 'white' : '#fb56c1',
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                }}>
                Male
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setGender('Female')}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: gender === 'Female' ? '#fb56c1' : '#ededed',
              }}>
              <Text
                style={{
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                  color: gender === 'Female' ? 'white' : '#fb56c1',
                }}>
                Female
              </Text>
            </Pressable>
          </View>
          <View style={{paddingHorizontal: hp(3)}}>
            <Datepicker
               min={min}
               max={max}
               label={() => (
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    paddingVertical: hp(1),
                  }}>
                  Birthday
                </Text>
              )}
              date={date}
              accessoryRight={CalendarIcon}
              
              onSelect={(nextDate) => setDate(nextDate)}
            />
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(2)}}>
            <Input
              value={location}
              textStyle={{
                paddingVertical: hp(1),
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}
              label={() => (
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    paddingVertical: hp(1),
                  }}>
                  Location
                </Text>
              )}
              onChangeText={(nextValue) => setLocation(nextValue)}
            />
          </View>
          <View style={{paddingHorizontal: hp(3), marginBottom: hp(2)}}>
            <Pressable
              onPress={()=>navigation.navigate('ProfileHelperPage',{
                topic:'CHANGE_PASSWORD',
                title:'Change Password'
              })}
              style={{
                backgroundColor: 'white',
                paddingVertical: hp(1.5),
                borderRadius: hp(0.3),
                borderWidth: hp(0.1),
                borderColor: '#e6e6e6',
              }}>
              <Text
                style={{textAlign: 'center', fontFamily: 'ProductSans-Bold'}}>
                CHANGE PASSWORD
              </Text>
            </Pressable>
          </View>
        </ScrollView>
        <View
          style={{
            paddingHorizontal: hp(3),
            paddingVertical: hp(2),
            borderTopColor: '#e6e6e6',
            borderTopWidth: hp(0.2),
            backgroundColor: 'white',
          }}>
          <Pressable
            style={{backgroundColor: '#fb56c1', paddingVertical: hp(1.5)}}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'ProductSans-Bold',
                color: 'white',
              }}>
              SAVE DETAILS
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
