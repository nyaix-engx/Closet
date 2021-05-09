import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, SafeAreaView, Platform} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Divider} from '@ui-kitten/components';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Instagram from '../../Assets/Svg/instagram_circle.svg';
import Twitter from '../../Assets/Svg/twitter_circle.svg';
import Facebook from '../../Assets/Svg/facebook_circle.svg';
import Fontisto from 'react-native-vector-icons/Fontisto'


const CustomDrawer = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <View style={{marginVertical:hp(1)}}>
            <Avatar
              ImageComponent={() => (
                <Image
                  style={styles.tinyLogo}
                  source={require('../../Assets/Images/avatar.jpeg')}
                />
              )}
            />
          </View>
          <View style={{marginVertical:hp(1)}}>
            <Text style={{fontSize: Platform.OS==='android'? hp(2.2) :hp(2),color:'#969696',fontFamily:'ProductSans-Bold'}}>
              Hugh Jackman
            </Text>
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.tabWrapper}>
          <DrawerItem
            style={{display: 'flex', justifyContent: 'center'}}
            label="Home"
            activeTintColor="yellow"
            activeBackgroundColor="purple"
            
            labelStyle={styles.label}
            icon={({focused, color, size}) => (
              <SimpleLineIcons color={'#969696'} size={hp(2.5)} name={'home'} />
            )}
            onPress={() => {}}
          />
          <DrawerItem
            style={{display: 'flex', justifyContent: 'center'}}
            label="Profile"
            activeTintColor="yellow"
            activeBackgroundColor="purple"
            labelStyle={styles.label}
            icon={({focused, color, size}) => (
              <Feather color={'#969696'} size={hp(2.5)} name={'user'} />
            )}
            onPress={() => {}}
          />
          <DrawerItem
            style={{display: 'flex'}}
            label="Orders"
            activeTintColor="yellow"
            activeBackgroundColor="purple"
            labelStyle={styles.label}
            icon={({focused, color, size}) => (
              <SimpleLineIcons
                color={'#969696'}
                size={hp(2.5)}
                name={'social-dropbox'}
              />
            )}
            onPress={() => {}}
          />
            <DrawerItem
            style={{display: 'flex', justifyContent: 'center'}}
            label="Wishlist"
            activeTintColor="yellow"
            activeBackgroundColor="purple"
            labelStyle={styles.label}
            icon={({focused, color, size}) => (
              <SimpleLineIcons
                color={'#969696'}
                size={hp(2.5)}
                name={'star'}
              />
            )}
            onPress={() => {}}
          />
      </View>
      <Divider />
      <View style={styles.social}>
        <View style={{display:'flex',justifyContent:'center',flex:1,alignItems:'center',backgroundColor:'#cacaca'}}>
          <Text style={{fontSize:hp(2.2),color:'white', fontFamily:'ProductSans-Bold'}}>Follow us on</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flex:2,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{marginHorizontal:hp(2)}}>
            <Pressable
              android_ripple={
                {
                  color:'#cccccc',
                  radius:hp(5),
                  borderless:true
                }
              }
            >
              <Facebook width={hp(6)} height={hp(6)} />
            </Pressable>
          </View>
          <View style={{marginHorizontal:hp(2)}}>
            <Pressable
            android_ripple={
              {
                color:'#cccccc',
                radius:hp(5),
                borderless:true
              }
            }
            >
              <Instagram width={hp(6)} height={hp(6)} />
            </Pressable>
          </View>
          <View style={{marginHorizontal:hp(2)}}>
            <Pressable
             android_ripple={
              {
                color:'#cccccc',
                radius:hp(5),
                borderless:true
              }
            }
            >
              <Twitter width={hp(6)} height={hp(6)} />
            </Pressable>
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.footer}>
        <DrawerItem
          style={{display: 'flex', justifyContent: 'center'}}
          label="Signout"
          activeTintColor="yellow"
          activeBackgroundColor="purple"
          labelStyle={styles.label}
          icon={({focused, color, size}) => (
            <SimpleLineIcons color={'#969696'} size={hp(2.5)} name={'logout'} />
          )}
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    paddingHorizontal: hp(2),
    flex: 1,
  },
  social: {
    flex: 1,
  },
  tinyLogo: {
    width: hp(10),
    height: hp(10),
    borderRadius: hp(5),
  },
  label:{
    fontSize: Platform.OS==='android'? hp(2): hp(1.8),
    fontFamily:'ProductSans-Regular',
    fontWeight:'100',
    color:'#969696'
  },
  tabWrapper: {
    flex: 2,
  },
  footer: {
    flex: 0.5,
  },
});

export default CustomDrawer;
