import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TitleHeader from '../../Components/CategoryScreenComps/TitleHeader';
import PageContainer from '../../Components/Formatters/PageContainer';
import {Avatar} from '@ui-kitten/components';
import Entypo from 'react-native-vector-icons/Entypo';
import {Divider, List, ListItem} from '@ui-kitten/components';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScaleAnimation from '../../Components/ScaleAnimation';
import Button from '../../Components/Button';
import EntryAnimation from '../../Components/EntryAnimation';

const ProfileScreen = props => {
  const data = [
    {
      title: 'Orders',
      description: 'Check your order status',
      accessory: () => (
        <SimpleLineIcons
          style={{paddingHorizontal: hp(1)}}
          name="social-dropbox"
          size={hp(3)}
        />
      ),
    },
    {
      title: 'Wishlist',
      description: 'Your most loved styles',
      accessory: () => (
        <AntDesign
          style={{paddingHorizontal: hp(1)}}
          name="hearto"
          size={hp(3)}
        />
      ),
    },
    {
      title: 'Saved Cards',
      description: 'Save your cards for faster checkout',
      accessory: () => (
        <MaterialIcons
          style={{paddingHorizontal: hp(1)}}
          name="credit-card"
          size={hp(3)}
        />
      ),
    },
    {
      title: 'Address',
      description: 'Save addresses for a hassle-free checkout',
      accessory: () => (
        <Ionicons
          style={{paddingHorizontal: hp(1)}}
          name="location-outline"
          size={hp(3)}
        />
      ),
    },
    {
      title: 'Profile Details',
      description: 'Change your profile details & password',
      accessory: () => (
        <AntDesign
          style={{paddingHorizontal: hp(1)}}
          name="profile"
          size={hp(3)}
        />
      ),
    },
  ];
  const renderItemAccessory = props => (
    <Entypo
      size={hp(3)}
      style={{paddingHorizontal: hp(1)}}
      name="chevron-small-right"
    />
  );

  const handlePress = index => {
    if (index === 0) {
      props.navigation.navigate('OrdersPage');
    } else if (index === 1) {
      props.navigation.navigate('Wishlist', {backButton: true});
    } else if (index === 2) {
      props.navigation.navigate('SavedCardsPage');
    } else if (index === 3) {
      props.navigation.navigate('AddressPage');
    } else if (index === 4) {
      props.navigation.navigate('EditProfilePage');
    }
  };

  const renderItem = ({item, index}) => (
    <EntryAnimation index={index+1} key={index}>
      <ListItem
      onPress={() => handlePress(index)}
      title={props => (
        <Text
          {...props}
          style={{
            fontSize: hp(1.8),
            paddingHorizontal: hp(1),
            fontFamily:
              Platform.OS === 'android'
                ? 'ProductSans-Bold'
                : 'ProductSans-Regular',
          }}>
          {item.title}
        </Text>
      )}
      style={{height: hp(10)}}
      description={props => (
        <Text
          {...props}
          style={{
            paddingVertical: hp(1),
            fontSize: hp(1.6),
            paddingHorizontal: hp(1),
            color: '#a3a3a3',
          }}>
          {item.description}
        </Text>
      )}
      accessoryRight={renderItemAccessory}
      accessoryLeft={item.accessory}
    />
    </EntryAnimation>
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <PageContainer>
        <TitleHeader title="Profile" />
        <View style={{marginBottom: hp(2)}}>
          <List
            data={data}
            ItemSeparatorComponent={Divider}
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{
              paddingBottom: Platform.OS === 'android' ? hp(5) : hp(1),
            }}
            ListFooterComponent={
              <View
                style={{
                  paddingHorizontal: hp(4),
                  display: 'flex',
                  justifyContent: 'center',
                  paddingVertical: hp(2),
                }}>
                <ScaleAnimation onPress={() => {}} scaleTo={0.9}>
                  <Button
                    viewProps={{
                      borderRadius: hp(0.5),
                      backgroundColor: '#fb56c1',
                      paddingVertical: hp(1.8),
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#fb56c1',
                        fontFamily: 'ProductSans-Bold',
                        color: 'white',
                      }}>
                      LOG OUT
                    </Text>
                  </Button>
                </ScaleAnimation>
              </View>
            }
            ListHeaderComponent={
              <View
                style={{
                  height: hp(30),
                  position: 'relative',
                  backgroundColor: 'grey',
                  marginBottom: hp(2),
                }}>
                <View
                  style={{
                    position: 'absolute',
                    zIndex: 300,
                    top: hp(12.5),
                    left: hp(2),
                  }}>
                  <Avatar
                    ImageComponent={() => (
                      <Image
                        style={styles.tinyLogo}
                        source={require('../../Assets/Images/avatar.jpeg')}
                      />
                    )}
                  />
                </View>
                <View style={{height: '60%', backgroundColor: 'blue'}}></View>
                <View
                  style={{
                    height: '30%',
                    paddingLeft: hp(15),
                    paddingVertical: hp(1),
                  }}>
                  <View>
                    <Text
                      style={{
                        fontFamily:
                          Platform.OS === 'android'
                            ? 'ProductSans-Bold'
                            : 'ProductSans-Regular',
                        fontSize: hp(2),
                      }}>
                      Hugh Jackman
                    </Text>
                  </View>
                </View>
              </View>
            }
            renderItem={renderItem}
          />
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: hp(12),
    height: hp(12),
    borderRadius: hp(1),
  },
  container: {
    maxHeight: hp(15),
  },
});

export default ProfileScreen;
