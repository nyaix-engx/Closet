import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TitleHeader from '../../Components/CategoryScreenComps/TitleHeader';
import OutOfStockProduct from '../../Components/WishlistScreenComps/OutOfStockProduct';
import ProductCard from '../../Components/WishlistScreenComps/ProductCard';
import Modal from '../../Components/WishlistScreenComps/Modal';
import SimilarStylesCard from '../../Components/WishlistScreenComps/SimilarStylesCard';
import BackButtonTitle from '../../Components/BackButtonTitle';

const WishlistScreen = ({route}) => {
  const [showSimilarModal, setShowSimilarModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="WISHLIST" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View
            style={{
              paddingHorizontal: hp(1),
              paddingVertical: hp(2),
              marginBottom: hp(2),
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              backgroundColor: 'white',
            }}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: hp(1.6),
                height: hp(10),
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: 'ProductSans-Regular',
                    fontWeight: 'bold',
                    fontSize: Platform.OS === 'ios' ? hp(1.7) : hp(2),
                  }}>
                  Out of Stock Items
                </Text>
              </View>
              <Pressable onPress={() => setShowRemoveModal(true)}>
                <View
                  style={{
                    padding: hp(1.3),
                    borderColor: '#c7c7c7',
                    borderWidth: hp(0.1),
                    borderRadius: hp(0.3),
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: Platform.OS === 'ios' ? hp(1.5) : hp(1.6),
                    }}>
                    REMOVE ALL
                  </Text>
                </View>
              </Pressable>
            </View>
            <View
              style={{
                paddingHorizontal: hp(1),
                paddingVertical: hp(0.5),
                marginBottom: hp(2),
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <OutOfStockProduct
                setShowSimilarModal={() => setShowSimilarModal(true)}
              />
              <OutOfStockProduct
                setShowSimilarModal={() => setShowSimilarModal(true)}
              />
              <OutOfStockProduct
                setShowSimilarModal={() => setShowSimilarModal(true)}
              />
              <OutOfStockProduct
                setShowSimilarModal={() => setShowSimilarModal(true)}
              />
              <OutOfStockProduct
                setShowSimilarModal={() => setShowSimilarModal(true)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal
        showModal={showSimilarModal}
        setShowModal={() => setShowSimilarModal(false)}
        height={hp(40)}
        width={100}
        position="bottom"
        isTabView={true}
        animationType="BottomToTop"
        borderTopLeftRadius={hp(1)}
        borderTopRightRadius={hp(1)}
        opacity={0.5}
        animationTime={250}
        style={{borderTopLeftRadius: hp(1), borderTopRightRadius: hp(1)}}>
        <View>
          <View
            style={{
              paddingVertical: hp(2.1),
              paddingHorizontal: hp(2),
            }}>
            <Text
              style={{
                fontFamily: 'ProductSans-Regular',
                fontWeight: 'bold',
                color: 'grey',
                fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.7),
              }}>
              SIMILAR STYLES
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: hp(1.5),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
            <SimilarStylesCard />
          </ScrollView>
        </View>
      </Modal>
      <Modal
        showModal={showRemoveModal}
        setShowModal={() => setShowRemoveModal(!showRemoveModal)}
        height={hp(25)}
        width={85}
        position="middle"
        animationType="FadeInTopToBot"
        isTabView={true}
        borderTopLeftRadius={hp(1)}
        borderTopRightRadius={hp(1)}
        borderBottomLeftRadius={hp(1)}
        borderBottomRightRadius={hp(1)}
        borderRadius={hp(0.5)}
        style={{borderRadius: hp(1)}}
        animationTime={250}>
        <View
          style={{flex: 1, paddingVertical: hp(1), paddingHorizontal: hp(2)}}>
          <View style={{flex: 1.7, display: 'flex', justifyContent: 'center'}}>
            <Text
              style={{fontFamily: 'ProductSans-Regular', fontWeight: 'bold'}}>
              Remove from Wishlist
            </Text>
          </View>
          <View style={{flex: 3, display: 'flex', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'ProductSans-Regular'}}>
              16 item(s) will be removed from your wishlist.
            </Text>
            <Text>Are you sure you want to continue?</Text>
          </View>
          <View
            style={{flex: 2, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Pressable
              style={{padding: hp(2)}}
              onPress={() => setShowRemoveModal(false)}>
              <Text
                style={{fontFamily: 'ProductSans-Regular', fontWeight: 'bold'}}>
                CANCEL
              </Text>
            </Pressable>
            <Pressable style={{padding: hp(2)}}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Regular',
                  fontWeight: 'bold',
                  color: '#fb56c1',
                }}>
                REMOVE
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default WishlistScreen;
