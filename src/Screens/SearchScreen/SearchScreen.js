import React, {useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react/cjs/react.development';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import FadingBackScroll from '../../Components/FadingbackScroll';
import {useNavigation} from '@react-navigation/native';
import FadingBackScrollCard from '../../Components/FadingBackScrollCard';
import ContentContainer from '../../Components/HomeScreenComps/ContentContainer';
import {
  Avatar,
  Button,
  ListItem,
  List,
  Icon,
  Input,
} from '@ui-kitten/components';
import {interestArray} from '../../Utils/arrays';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  const brandsArray = [
    {
      img: require('../../Assets/Images/scroll1.jpg'),
      footerText: 'Upto 30% Off',
    },
    {
      img: require('../../Assets/Images/scroll2.jpg'),
      footerText: 'Upto 30% Off',
    },
    {
      img: require('../../Assets/Images/scroll3.jpg'),
      footerText: 'Upto 30% Off',
    },
  ];
  const renderItem = ({item, index}) => (
    <ListItem
      style={{paddingHorizontal: hp(2)}}
      title={() => (
        <Text
          style={{
            fontFamily: 'ProductSans-Regular',
            fontSize: hp(1.8),
            paddingHorizontal: hp(1),
          }}>
          {item.brand}
        </Text>
      )}
      description={() => (
        <Text
          style={{
            fontFamily: 'ProductSans-Regular',
            fontSize: hp(1.8),
            paddingHorizontal: hp(1),
          }}>
          {item.category}
        </Text>
      )}
      accessoryLeft={() => (
        <Avatar
          ImageComponent={() => (
            <Image
              style={{width: hp(6), height: hp(6), borderRadius: hp(3)}}
              source={item.image}
            />
          )}
        />
      )}
      accessoryRight={() => <Fontisto size={hp(1.6)} name="angle-right" />}
    />
  );

  const getFooter = () => {
    return (
      <>
        <FadingBackScroll
          style={{marginBottom:hp(2)}}
          height={hp(34)}
          headingText={'ITEMS YOU HAVE VIEWED'}
          backgroundImage={require('../../Assets/Images/background.jpg')}
          coverText="Recently Viewed"
          cardComponent={FadingBackScrollCard}
          array={brandsArray}
        />
        <FadingBackScroll
          style={{marginBottom: hp(2)}}
          height={hp(34)}
          headingText={'RECOMMENDED FOR YOU'}
          backgroundImage={require('../../Assets/Images/background.jpg')}
          coverText="NEW ARRIVALS"
          cardComponent={FadingBackScrollCard}
          array={brandsArray}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: hp(7),
          display: 'flex',
          flexDirection: 'row',
          borderBottomColor: '#c7c7c7',
          borderBottomWidth: hp(0.1),
        }}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather
              name="arrow-left"
              size={hp(2.8)}
              style={{color: '#363636'}}
            />
          </Pressable>
        </View>
        <View style={styles.titleHeader}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Input
              placeholder="Search for bands & products"
              value={searchTerm}
              style={{
                width: '100%',
                borderColor: 'white',
                backgroundColor: 'white',
              }}
              textStyle={{
                fontSize: Platform.OS === 'android' ? hp(2.3) : hp(2.1),
                paddingVertical: hp(1.5),
                fontFamily: 'ProductSans-Regular',
              }}
              onChangeText={(nextValue) => setSearchTerm(nextValue)}
            />
          </View>
        </View>
      </View>
      <List
        style={styles.container}
        bounces={false}
        data={interestArray}
        renderItem={renderItem}
        ListHeaderComponent={  <View
          style={{
            paddingHorizontal: hp(2),
            height: hp(7),
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              fontFamily: 'ProductSans-Regular',
              fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.7),
              fontWeight: '700',
              color: '#363636',
            }}>
            YOU MAY BE INTERESTED IN
          </Text>
        </View>}
        ListFooterComponent={getFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    flex: 8,
    backgroundColor: 'white',
  },
});

export default SearchScreen;
