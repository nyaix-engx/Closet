import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ShoppingBagCard from '../../Components/ShoppingBagCard';
import Fontisto from 'react-native-vector-icons/Fontisto';
import BackButtonTitle from '../../Components/BackButtonTitle';
import ChangeDeliveryModal from '../../Components/ChangeDeliveryModal';

const ShoppingBagScreen = ({navigation}) => {
  const[showDeliveryModal,setShowDeliveryModal]=useState(false)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="SHOPPING BAG" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView
          style={{flex: 1}}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: 'white',
              marginTop: hp(2),
              paddingVertical: hp(2),
              marginBottom: hp(2),
            }}>
            <Text
              style={{
                fontFamily: 'ProductSans-Bold',
                fontSize: hp(2),
                textAlign: 'center',
                marginBottom: hp(1),
              }}>
              Trust & Safety Promise
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  paddingHorizontal: hp(0.5),
                  borderRightWidth: hp(0.1),
                  borderLeftColor: '#757575',
                }}>
                <Text>Original Products</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: hp(0.5),
                  borderLeftWidth: hp(0.1),
                  borderLeftColor: '#757575',
                  borderRightWidth: hp(0.1),
                  borderRightColor: '#757575',
                }}>
                <Text>Safe Payment</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: hp(0.5),
                  borderLeftWidth: hp(0.1),
                  borderLeftColor: '#757575',
                }}>
                <Text>Easy returns</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: hp(1.5),
              paddingVertical: hp(2),
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: hp(2),
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Regular',
                  fontSize: hp(2),
                  marginRight: hp(1),
                }}>
                Deliver to:
              </Text>
              <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2)}}>
                110062
              </Text>
            </View>
            <Pressable onPress={()=>setShowDeliveryModal(true)} >
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(1.9),
                  color: '#fb7ca0',
                }}>
                CHANGE
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: hp(1.5),
              paddingVertical: hp(2),
              marginBottom: hp(2),
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: hp(2),
              }}>
              <View style={{marginRight: hp(1.5)}}>
                <Image
                  source={require('../../Assets/Images/offer.png')}
                  style={{height: hp(3), width: hp(3)}}
                />
              </View>
              <View>
                <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2)}}>
                  Available Offers
                </Text>
              </View>
            </View>
            <View style={{marginBottom: hp(2)}}>
              <Text>
                10% Instant Discount on Bank Of Baroda Credit Cards on a min
                spend of Rs 2,500. TCA
              </Text>
            </View>
            <Pressable>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                    color: '#fb7ca0',
                  }}>
                  Show More
                </Text>
                <Ionicons
                  name="ios-chevron-down-sharp"
                  size={hp(2.2)}
                  style={{color: '#fb7ca0'}}
                />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: hp(3),
              paddingHorizontal: hp(1.5),
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2)}}>
                2 ITEMS
              </Text>
            </View>
            <View>
              <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2)}}>
                Total: $120
              </Text>
            </View>
          </View>
          <View style={{paddingHorizontal: hp(1), marginBottom: hp(2)}}>
            <ShoppingBagCard />
            <ShoppingBagCard />
          </View>
          <View
            style={{
              paddingVertical: hp(2),
              paddingHorizontal: hp(1.5),
              marginBottom: hp(2),
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <Image
                source={require('../../Assets/Images/coupon.png')}
                style={{height: hp(3), width: hp(3)}}
              />
            </View>
            <View style={{flex: 7}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'ProductSans-Bold',
                    fontSize: hp(2),
                    marginBottom: hp(1),
                    fontSize: hp(1.8),
                  }}>
                  1 Coupon applied
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  color: 'green',
                  fontSize: hp(1.8),
                }}>
                You saved additional $20
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="angle-right" size={hp(2)} />
            </View>
          </View>
          <View
            style={{
              paddingVertical: hp(1),
              paddingHorizontal: hp(1.5),
              backgroundColor: 'white',
            }}>
            <View
              style={{
                paddingVertical: hp(1.5),
                borderBottomColor: '#757575',
                borderBottomWidth: hp(0.05),
              }}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(1.8),
                }}>
                PRICE DETAILS (2 Items)
              </Text>
            </View>
            <View
              style={{
                paddingVertical: hp(1.5),
                borderBottomColor: '#757575',
                borderBottomWidth: hp(0.05),
                display: 'flex',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: hp(1),
                }}>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Regular',
                  }}>
                  Total MRP
                </Text>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Regular',
                  }}>
                  $250
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: hp(1),
                }}>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Regular',
                  }}>
                  Discount on MRP
                </Text>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Regular',
                    color: 'green',
                  }}>
                  -$50
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: hp(1),
                }}>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Regular',
                  }}>
                  Coupon Discount
                </Text>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Regular',
                    color: 'green',
                  }}>
                  -$10
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Regular',
                  }}>
                  Delivery Fee
                </Text>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Regular',
                    color: 'green',
                  }}>
                  FREE
                </Text>
              </View>
            </View>
            <View style={{paddingVertical: hp(1.5)}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: hp(1),
                }}>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                  }}>
                  Total Amount
                </Text>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontFamily: 'ProductSans-Bold',
                  }}>
                  $190
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.7,
          justifyContent: 'center',
          paddingHorizontal: hp(1),
          paddingVertical: hp(1),
        }}>
        <Pressable
          style={{
            flex: 1,
            borderRadius: hp(0.5),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fb7ca0',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(2),
            }}>
            PLACE ORDER
          </Text>
        </Pressable>
      </View>
      <ChangeDeliveryModal
      showModal={showDeliveryModal}
      setShowModal={()=>setShowDeliveryModal(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleHeader: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: hp(0.1),
    backgroundColor: 'white',
  },
});

export default ShoppingBagScreen;
