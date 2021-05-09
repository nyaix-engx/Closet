import React from 'react';
import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BackButtonTitle from '../../Components/BackButtonTitle';
import OrderCardItem from '../../Components/WishlistScreenComps/OrderCardItem';

const ItemDetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.8}}>
        <BackButtonTitle title="ITEM DETAILS" />
      </View>
      <View style={{flex: 8}}>
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          <View style={{paddingVertical: hp(2)}}>
            <View
              style={{
                height: hp(25),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: '100%',
                  width: hp(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../../Assets/Images/polo.png')}
                  style={{height: '90%', width: '100%'}}
                />
              </View>
            </View>
            <View style={{paddingVertical: hp(1)}}>
              <View style={{paddingVertical: hp(0.2)}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'ProductSans-Bold',
                    fontSize: hp(2.3),
                  }}>
                  HRX by Hrithik Roshan
                </Text>
              </View>
              <View style={{paddingVertical: hp(0.2)}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'ProductSans-Regular',
                    fontSize: hp(2.1),
                    flexWrap: 'wrap',
                  }}>
                  Ultralyte Men Yellow Running Regular Fit Tshirt
                </Text>
              </View>
              <View style={{paddingVertical: hp(0.2)}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'ProductSans-Regular',
                    fontSize: hp(2.1),
                  }}>
                  Size: M
                </Text>
              </View>
            </View>
            <View style={{paddingHorizontal: hp(2)}}>
              <View
                style={{
                  backgroundColor: '#34a880',
                  borderRadius: hp(0.2),
                  height: hp(9),
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: hp(7),
                    height: '100%',
                    justifyContent: 'center',
                    paddingVertical: hp(2),
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMethod="resize"
                    source={require('../../Assets/Images/delivery.png')}
                    style={{width: '50%', height: '50%'}}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingHorizontal: hp(1),
                  }}>
                  <View style={{paddingVertical: hp(0.2)}}>
                    <Text
                      style={{
                        fontSize: hp(2),
                        fontFamily: 'ProductSans-Bold',
                        color: 'white',
                      }}>
                      Delivered
                    </Text>
                  </View>
                  <View style={{paddingVertical: hp(0.2)}}>
                    <Text
                      style={{
                        fontSize: hp(1.9),
                        fontFamily: 'ProductSans-Regular',
                        color: 'white',
                      }}>
                      On Mon, 12 Oct
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: hp(3),
              backgroundColor: 'white',
              marginBottom: hp(2),
            }}>
            <View style={{paddingHorizontal: hp(2), marginBottom: hp(2)}}>
              <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.2)}}>
                Delivery Address
              </Text>
            </View>
            <View style={{paddingHorizontal: hp(2)}}>
              <View style={{flexDirection: 'row', marginBottom: hp(1)}}>
                <View
                  style={{
                    paddingRight: hp(1.2),
                    borderRightWidth: hp(0.1),
                    borderRightColor: 'grey',
                  }}>
                  <Text
                    style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
                    Austin
                  </Text>
                </View>
                <View style={{paddingLeft: hp(1.2)}}>
                  <Text
                    style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
                    8956723790
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{fontSize: hp(2), fontFamily: 'ProductSans-Regular'}}>
                  B-3, Green Park, New Delhi-78,
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: hp(2),
              backgroundColor: 'white',
              marginBottom: hp(2),
            }}>
            <View
              style={{
                paddingHorizontal: hp(2),
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: hp(1),
              }}>
              <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.2)}}>
                Total Item Price
              </Text>
              <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.2)}}>
                $20
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: hp(2),
                paddingVertical: hp(0.5),
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontFamily: 'ProductSans-Regular', fontSize: hp(2)}}>
                  You saved{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: 'ProductSans-Bold',
                    fontSize: hp(2),
                    color: '#34a880',
                  }}>
                  $5{' '}
                </Text>
                <Text
                  style={{fontFamily: 'ProductSans-Regular', fontSize: hp(2)}}>
                  on this item
                </Text>
              </View>
              <Pressable>
                <Text
                  style={{
                    fontFamily: 'ProductSans-Bold',
                    fontSize: hp(2),
                    color: '#fb56c1',
                  }}>
                  View Breakup
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              padding: hp(2),
              backgroundColor: 'white',
              marginBottom: hp(2),
            }}>
            <View style={{marginBottom: hp(2)}}>
              <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.2)}}>
                Other items in this order
              </Text>
              <Text
                style={{
                  fontFamily: 'ProductSans-Regular',
                  fontSize: hp(2),
                  paddingVertical: hp(0.5),
                }}>
                Order ID #11549041123
              </Text>
            </View>
            <View style={{paddingVertical: hp(1)}}>
              <View style={{marginBottom: hp(0.5)}}>
                <OrderCardItem
                  title="HRX by Hrithik Roshan"
                  subtitle="Ultralyte Men Yellow Tshirt"
                  size="M"
                  image={require('../../Assets/Images/tshirts.jpg')}
                />
              </View>
              <View style={{marginBottom: hp(1)}}>
                <OrderCardItem
                  title="HRX by Hrithik Roshan"
                  subtitle="Ultralyte Men Yellow Tshirt"
                  size="M"
                  image={require('../../Assets/Images/tshirts.jpg')}
                />
              </View>
            </View>
            <View style={{borderTopWidth:hp(0.2),borderTopColor:'#e0e0e0'}}>
              <View
                style={{
                  backgroundColor: 'white',
                  paddingTop:hp(2)
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: hp(1),
                  }}>
                  <Text
                    style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.2)}}>
                    Total Order Price
                  </Text>
                  <Text
                    style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.2)}}>
                    $20
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: hp(0.5),
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Regular',
                        fontSize: hp(2),
                      }}>
                      You saved{' '}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Bold',
                        fontSize: hp(2),
                        color: '#34a880',
                      }}>
                      $5{' '}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Regular',
                        fontSize: hp(2),
                      }}>
                      on this item
                    </Text>
                  </View>
                  <Pressable>
                    <Text
                      style={{
                        fontFamily: 'ProductSans-Bold',
                        fontSize: hp(2),
                        color: '#fb56c1',
                      }}>
                      View Breakup
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={{padding: hp(2), backgroundColor: 'white'}}>
            <View style={{marginBottom: hp(2)}}>
              <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.2)}}>
                Updates sent to
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: hp(2),
                }}>
                <MaterialIcons
                  name="call"
                  size={hp(3)}
                  style={{marginRight: hp(2)}}
                />
                <Text
                  style={{fontSize: hp(2), fontFamily: 'ProductSans-Regular'}}>
                  8347734562
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: hp(2),
                }}>
                <MaterialIcons
                  name="mail"
                  size={hp(3)}
                  style={{marginRight: hp(2)}}
                />
                <Text
                  style={{fontSize: hp(2), fontFamily: 'ProductSans-Regular'}}>
                  austin_345@gmail.com
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ItemDetailsScreen;
