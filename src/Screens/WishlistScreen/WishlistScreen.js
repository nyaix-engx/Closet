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
import OutOfStockProduct from '../../Components/WishlistScreenComps/OutOfStockProduct';
import ProductCard from '../../Components/WishlistScreenComps/ProductCard';
import BackButtonTitle from '../../Components/BackButtonTitle';
import RemoveAllModal from '../../Components/RemoveAllModal';
import ShowSimilarModal from '../../Components/ShowSimilarModal';

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
      <RemoveAllModal showModal={showRemoveModal} setShowModal={()=>setShowRemoveModal(false)} />
      <ShowSimilarModal showModal={showSimilarModal} setShowModal={()=>setShowSimilarModal(false)} />
    </SafeAreaView>
  );
};

export default WishlistScreen;
