import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import NavigationHeader from '../../Components/NavigationHeader';
import ListingCard from '../../Components/ListingCard';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from '../../Components/WishlistScreenComps/Modal';
import {List, ListItem, Divider} from '@ui-kitten/components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {sortData} from '../../Utils/arrays';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import FiltersModal from '../../Components/FiltersModal'

const ListingPage = () => {
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const {height} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const renderItem = ({item, index}) => (
    <ListItem
      style={{height: hp(6.7), paddingHorizontal: hp(2.5)}}
      title={(props) => (
        <Text
          {...props}
          style={{fontSize: hp(1.8), fontFamily: 'ProductSans-Regular'}}>
          {item.title}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.9}}>
        <NavigationHeader title="Myntra" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.9,
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <Pressable
          onPress={() => setShowSortModal(!showSortModal)}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: hp(1.5),
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: hp(0.05),
              borderRightColor: '#c3c3c3',
            }}>
            <Fontisto
              name="arrow-swap"
              size={hp(2)}
              style={{
                transform: [{rotateZ: '90deg'}],
                paddingHorizontal: hp(0.5),
                color: '#363636',
              }}
            />
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
                color: '#363636',
              }}>
              SORT
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => setShowFilterModal(true)}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: hp(1.5),
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              borderLeftWidth: hp(0.05),
              borderLeftColor: '#c3c3c3',
              alignItems: 'center',
            }}>
            <MaterialIcons
              name="filter-list-alt"
              size={hp(2.5)}
              style={{paddingHorizontal: hp(0.5), color: '#363636'}}
            />
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
                color: '#363636',
              }}>
              FILTER
            </Text>
          </View>
        </Pressable>
      </View>
      <FiltersModal
        showFilterModal={showFilterModal}
        setShowFilterModal={() => setShowFilterModal(false)}
        position="bottom"
        animationType="BottomToTop"
        animationTime={250}
      />
      <Modal
        showModal={showSortModal}
        setShowModal={() => setShowSortModal(false)}
        height={hp(40)}
        width={100}
        position="bottom"
        animationType="BottomToTop"
        borderTopLeftRadius={hp(2)}
        borderTopRightRadius={hp(2)}
        animationTime={250}>
        <View
          style={{
            height: hp(6),
            backgroundColor: 'white',
            borderTopLeftRadius: hp(1),
            borderTopRightRadius: hp(1),
          }}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 2,
                display: 'flex',
                justifyContent: 'center',
                paddingHorizontal: hp(2.5),
              }}>
              <Text style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
                SORT BY
              </Text>
            </View>
            <View
              style={{
                flex: 4,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '75%',
                }}>
                <Pressable
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
                    ASC
                  </Text>
                  <FontAwesome5 name="sort-alpha-down" size={hp(2.3)} />
                </Pressable>
                <Pressable
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
                    DESC
                  </Text>
                  <FontAwesome5 name="sort-alpha-up" size={hp(2.3)} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={{height: hp(34), backgroundColor: 'purple'}}>
          <List
            style={{flex: 1, backgroundColor: 'grey'}}
            data={sortData}
            renderItem={renderItem}
            ItemSeparatorComponent={Divider}
            bounces={false}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ListingPage;
