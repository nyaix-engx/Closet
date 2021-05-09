import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import DescCarousel from '../../Components/DescCarousel';
import {imageArray} from '../../Utils/arrays';
import CustomerReview from '../../Components/CustomerReviewComp';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';
import SimilarStylesCard from '../../Components/WishlistScreenComps/SimilarStylesCard'

const DescriptionScreen = () => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  let scrollY = useRef(new Animated.Value(0));
  const [display, setDisplay] = useState('flex');

  let backcolor = Animated.interpolateColors(
    scrollY.current,
    {
      inputRange: [0, hp(60)],
      outputColorRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
    },
    {
      inputRange: [hp(60), 0],
      outputColorRange: ['rgba(255,255,255,1)', 'rgba(255,255,255,0)'],
    },
  );
  const handleScroll = (e) => {
    //   console.log("SCroll",e)
    //  if(e[0]>270.76666666666666667){
    //    setDisplay('none')
    //  }else {
    //    setDisplay('flex')
    //  }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: (y) =>
                  Animated.block([
                    Animated.set(scrollY.current, y),
                    Animated.call([y], handleScroll),
                  ]),
              },
            },
          },
        ])}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <DescCarousel
          style={{
            height: hp(65),
            backgroundColor: 'white',
          }}
          imageArray={imageArray}
          autoChange={true}
        />
        <View
          style={{
            height: hp(13),
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            paddingHorizontal: hp(1.5),
            marginBottom: hp(2),
          }}>
          <View style={{display: 'flex'}}>
            <View style={{display: 'flex', marginBottom: hp(1)}}>
              <Text style={{fontFamily: 'ProductSans-Bold', fontSize: hp(2.5)}}>
                Moda Rapido
              </Text>
              <Text style={{color: '#363636', flexWrap: 'wrap'}}>
                Men Maroon Printed Round Neck T-shirt
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: hp(1),
              }}>
              <Text
                style={{
                  marginRight: hp(1),
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Regular',
                }}>
                $50
              </Text>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Regular',
                  color: '#fb7ca0',
                }}>
                (40% OFF)
              </Text>
            </View>
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
                color: 'green',
              }}>
              Inclusive of all taxes
            </Text>
          </View>
        </View>
        <View
          style={{
            height: hp(10),
            paddingHorizontal: hp(1.5),
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            marginBottom: hp(2),
          }}>
          <Text
            style={{
              fontFamily: 'ProductSans-Bold',
              fontSize: hp(1.8),
              marginBottom: hp(1),
            }}>
            Easy 30 days returns and exchanges
          </Text>
          <View>
            <Text
              style={{
                fontFamily: 'ProductSans-Regular',
                fontSize: hp(1.7),
                color: '#757575',
              }}>
              Choose to return or exchange for a different size (if available)
              within 30 days.
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: hp(1.5),
            backgroundColor: 'white',
            marginBottom: hp(2),
          }}>
          <View style={{display: 'flex', justifyContent: 'center'}}>
            <View
              style={{
                paddingVertical: hp(2),
                borderBottomWidth: hp(0.1),
                borderBottomColor: '#c9c9c9',
              }}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Regular',
                  fontSize: hp(1.8),
                  color: '#757575',
                  marginBottom: hp(2),
                }}>
                SELECT SIZE
              </Text>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View
                  style={{
                    borderWidth: hp(0.1),
                    borderColor: 'black',
                    marginRight: hp(1),
                    width: hp(5),
                    height: hp(5),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(2.5),
                  }}>
                  <Text style={{fontSize: hp(2.4)}}>S</Text>
                </View>
                <View
                  style={{
                    borderWidth: hp(0.1),
                    borderColor: 'black',
                    marginRight: hp(1),
                    width: hp(5),
                    height: hp(5),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(2.5),
                  }}>
                  <Text style={{fontSize: hp(2.4)}}>M</Text>
                </View>
                <View
                  style={{
                    borderWidth: hp(0.1),
                    borderColor: 'black',
                    marginRight: hp(1),
                    width: hp(5),
                    height: hp(5),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(2.5),
                  }}>
                  <Text style={{fontSize: hp(2.4)}}>L</Text>
                </View>
                <View
                  style={{
                    borderWidth: hp(0.1),
                    borderColor: 'black',
                    marginRight: hp(1),
                    width: hp(5),
                    height: hp(5),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(2.5),
                  }}>
                  <Text style={{fontSize: hp(2.4)}}>XL</Text>
                </View>
                <View
                  style={{
                    borderWidth: hp(0.1),
                    borderColor: 'black',
                    marginRight: hp(1),
                    width: hp(7),
                    height: hp(5),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: hp(2.5),
                  }}>
                  <Text style={{fontSize: hp(2.4)}}>XXL</Text>
                </View>
              </View>
            </View>
            <View style={{paddingVertical: hp(2)}}>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Bold',
                  marginBottom: hp(1),
                }}>
                Model Size & Fit
              </Text>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Regular',
                  marginBottom: hp(2),
                  color: '#757575',
                }}>
                The model (height 6') is wearing a size M
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Pressable style={{width: '45%'}}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      paddingVertical: hp(1.2),
                      borderRadius: hp(0.5),
                      borderColor: '#d6d6d6',
                      borderWidth: hp(0.1),
                    }}>
                    <AntDesign
                      name="hearto"
                      size={hp(3)}
                      style={{marginRight: hp(1)}}
                    />
                    <Text
                      style={{
                        fontSize: hp(1.8),
                        fontFamily: 'ProductSans-Bold',
                      }}>
                      WISHLIST
                    </Text>
                  </View>
                </Pressable>
                <Pressable style={{width: '50%'}}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: hp(1.2),
                      backgroundColor: '#fb7ca0',
                      borderRadius: hp(0.5),
                    }}>
                    <Feather
                      name="shopping-bag"
                      size={hp(3)}
                      style={{marginRight: hp(1), color: 'white'}}
                    />
                    <Text
                      style={{
                        fontSize: hp(1.8),
                        fontFamily: 'ProductSans-Bold',
                        color: 'white',
                      }}>
                      ADD TO BAG
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: hp(1.5),
            paddingVertical: hp(1),
            backgroundColor: 'white',
            marginBottom: hp(2),
          }}>
          <View
            style={{
              paddingVertical: hp(1),
              borderBottomWidth: hp(0.1),
              borderBottomColor: '#c9c9c9',
            }}>
            <Text
              style={{
                fontSize: hp(2),
                fontFamily: 'ProductSans-Bold',
                color: '#757575',
                marginBottom: hp(0.5),
              }}>
              Fabric
            </Text>
            <Text
              style={{
                fontSize: hp(2),
                fontFamily: 'ProductSans-Regular',
                color: 'black',
                marginBottom: hp(0.5),
              }}>
              Cotton
            </Text>
          </View>
          <View style={{paddingTop: hp(3), marginBottom: hp(2)}}>
            <View>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Bold',
                  color: '#757575',
                  marginBottom: hp(0.5),
                }}>
                Product Details
              </Text>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Regular',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                Maroon and black printed T-shirt, has a round neck, long sleeves
              </Text>
            </View>
          </View>
          <View style={{marginBottom: hp(2)}}>
            <View>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Bold',
                  color: '#757575',
                  marginBottom: hp(0.5),
                }}>
                Size & Fit
              </Text>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Regular',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                The model (height 6') is wearing a size M
              </Text>
            </View>
          </View>
          <View style={{marginBottom: hp(2)}}>
            <View>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Bold',
                  color: '#757575',
                  marginBottom: hp(0.5),
                }}>
                Material & Care
              </Text>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Regular',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                100% cotton
              </Text>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Regular',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                Machine-wash
              </Text>
            </View>
          </View>
          <View style={{marginBottom: hp(1)}}>
            <View>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Bold',
                  color: '#757575',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                Style Note
              </Text>
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: 'ProductSans-Regular',
                  color: 'black',
                  marginBottom: hp(0.5),
                  textAlign: 'justify',
                }}>
                This tee made by Moda Rapido will definitely become a go-to item
                in your wardrobe. Whether you're running errands or meeting
                friends for coffee, sport this maroon number with slim black
                jeans or cutoff shorts for a relaxed style.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: hp(1.5),
            backgroundColor: 'white',
            paddingVertical: hp(1.5),
            marginBottom: hp(2),
          }}>
          <View
            style={{
              paddingVertical: hp(1),
            }}>
            <Text
              style={{
                fontSize: hp(2),
                fontFamily: 'ProductSans-Bold',
                marginBottom: hp(1),
              }}>
              Customer Reviews (2098)
            </Text>
          </View>
          <View>
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
          </View>
          <Pressable onPress={()=>navigation.push('ReviewsPage')} style={{paddingVertical: hp(1.5)}}>
            <Text
              style={{
                fontFamily: 'ProductSans-Bold',
                fontSize: hp(1.8),
                color: '#fb7ca0',
              }}>
              View all 208 reviews
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            paddingHorizontal: hp(1.5),
            paddingVertical: hp(1),
            backgroundColor: 'white',
            marginBottom: hp(2),
          }}>
          <View style={{paddingVertical: hp(2)}}>
            <Text style={{fontSize: hp(2), fontFamily: 'ProductSans-Regular'}}>
              DELIVERY & SERVICES FOR
            </Text>
          </View>
          <View
            style={{
              height: hp(5),
              display: 'flex',
              flexDirection: 'row',
              borderColor: '#c9c9c9',
              borderWidth: hp(0.1),
              borderRadius: hp(0.4),
              marginBottom: hp(1),
            }}>
            <View
              style={{
                flex: 4,
                display: 'flex',
                justifyContent: 'center',
                paddingHorizontal: hp(1),
              }}>
              <Text style={{fontSize: hp(2), fontFamily: 'ProductSans-Bold'}}>
                110049
              </Text>
            </View>
            <View style={{flex: 1.5}}>
              <Pressable
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: hp(2),
                    fontFamily: 'ProductSans-Bold',
                    color: '#fb7ca0',
                  }}>
                  Change
                </Text>
              </Pressable>
            </View>
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                display: 'flex',
                alignItems: 'center',
                paddingVertical: hp(0.5),
              }}>
              <MaterialIcons
                name="attach-money"
                size={hp(3)}
                style={{marginRight: hp(1)}}
              />
              <Text
                style={{
                  fontSize: hp(1.9),
                  fontFamily: 'ProductSans-Bold',
                  paddingVertical: hp(0.5),
                }}>
                Pay on delivery available
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                display: 'flex',
                alignItems: 'center',
                paddingVertical: hp(0.5),
              }}>
              <MaterialIcons
                name="swap-horiz"
                size={hp(3)}
                style={{marginRight: hp(1)}}
              />
              <Text
                style={{
                  fontSize: hp(1.9),
                  fontFamily: 'ProductSans-Bold',
                  paddingVertical: hp(0.5),
                }}>
                Easy 30 days return & exchange available
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                display: 'flex',
                paddingVertical: hp(0.5),
                alignItems: 'center',
              }}>
              <Ionicons
                name="ios-shirt-sharp"
                size={hp(3)}
                style={{marginRight: hp(1)}}
              />
              <Text
                style={{
                  fontSize: hp(1.9),
                  fontFamily: 'ProductSans-Bold',
                  paddingVertical: hp(0.5),
                }}>
                Try & Buy available
              </Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor:"white",marginBottom:hp(2),paddingVertical:hp(2)}}>
          <View
            style={{
              paddingHorizontal: hp(2),
              marginBottom:hp(2)
            }}>
            <Text
              style={{
                fontFamily: 'ProductSans-Regular',
                fontWeight: 'bold',
                color: 'grey',
                fontSize: Platform.OS === 'ios' ? hp(1.6) : hp(1.7),
              }}>
              VIEW SIMILAR
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
      </Animated.ScrollView>
      <Animated.View
        style={{
          height: hp(8),
          width,
          position: 'absolute',
          backgroundColor: backcolor,
          top: insets.top,
          zIndex: 1000,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{paddingVertical: hp(1), paddingHorizontal: hp(0.5)}}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
              flex: 1,
              justifyContent: 'center',
              width: hp(6),
              height: hp(2),
              alignItems: 'center',
              borderRadius: hp(5),
            }}>
            <Ionicons name="ios-arrow-back" size={hp(2.8)} />
          </View>
        </Pressable>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{paddingVertical: hp(1), paddingHorizontal: hp(0.5)}}>
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                flex: 1,
                justifyContent: 'center',
                width: hp(6),
                height: hp(2),
                alignItems: 'center',
                borderRadius: hp(5),
              }}>
              <Entypo name="share" size={hp(3)} />
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{paddingVertical: hp(1), paddingHorizontal: hp(0.5)}}>
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                flex: 1,
                justifyContent: 'center',
                width: hp(6),
                height: hp(2),
                alignItems: 'center',
                borderRadius: hp(5),
              }}>
              <AntDesign name="hearto" size={hp(3)} />
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{paddingVertical: hp(1), paddingHorizontal: hp(0.5)}}>
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.6)',
                flex: 1,
                justifyContent: 'center',
                width: hp(6),
                height: hp(2),
                alignItems: 'center',
                borderRadius: hp(5),
              }}>
              <Feather name="shopping-bag" size={hp(3)} />
            </View>
          </Pressable>
        </View>
      </Animated.View>
      {/* <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor:'white',
          width:'100%',
          paddingHorizontal:hp(1.5),
          paddingVertical:hp(1),
          position:'absolute',
          display,
          bottom:insets.bottom,
          justifyContent: 'space-between',
        }}>
        <Pressable style={{width: '45%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              justifyContent: 'center',
              paddingVertical: hp(1.2),
              borderRadius: hp(0.5),
              borderColor: '#d6d6d6',
              borderWidth: hp(0.1),
            }}>
            <AntDesign
              name="hearto"
              size={hp(3)}
              style={{marginRight: hp(1)}}
            />
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
              }}>
              WISHLIST
            </Text>
          </View>
        </Pressable>
        <Pressable style={{width: '50%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: hp(1.2),
              backgroundColor: '#fb7ca0',
              borderRadius: hp(0.5),
            }}>
            <Feather
              name="shopping-bag"
              size={hp(3)}
              style={{marginRight: hp(1), color: 'white'}}
            />
            <Text
              style={{
                fontSize: hp(1.8),
                fontFamily: 'ProductSans-Bold',
                color: 'white',
              }}>
              ADD TO BAG
            </Text>
          </View>
        </Pressable>
      </View> */}
    </SafeAreaView>
  );
};

export default DescriptionScreen;
