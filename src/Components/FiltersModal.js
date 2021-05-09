import React,{useState} from 'react';
import Modal from '../Components/WishlistScreenComps/Modal';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Discount, filterCategories} from '../Utils/arrays';
import FilterCheck from './FilterCheck';
import { sizes, colors,Brands,DeliveryTime } from '../Utils/arrays'
import FilterRadio from './WishlistScreenComps/FilterRadio';
import PriceSlider from './PriceSlider';

const FiltersModal = (props) => {

  const [filterState,setFilterState]=useState(0)
  const [sizeFilters,setSizeFilters]=useState([])
  const [colorFilters,setColorFilters]=useState([])
  const [brandFilters,setBrandFilters]=useState([])
  const [discount,setDiscount]=useState('10% and above')
  const [deliveryTime,setDeliveryTime]=useState('By Tomorrow')
  const [priceRange,setPriceRange]=useState({})
  
  const handlePress=()=>{
    setSizeFilters([])
    setColorFilters([])
    setBrandFilters([])
    setDiscount('')
    setDeliveryTime('')
    setPriceRange({})
  }

  const getFilterCategories = () => {
    return filterCategories.map((data, index) => {
      return (
        <Pressable
          key={index}
          onPress={()=>setFilterState(index)}
          style={{
            width: '100%',
            height: hp(8),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: hp(1),
            backgroundColor: index===filterState?'white':'#f5f5f5',
            borderBottomWidth:hp(0.05),
            borderBottomColor:'#d1d1d1'
          }}>
          <Text style={{fontSize: hp(2), fontFamily: 'ProductSans-Regular',fontWeight:index===filterState?'800':'100'}}>
            {data}
          </Text>
        </Pressable>
      );
    });
  };

  const getSelectedView=()=>{
      switch(filterState){
        case 1:
          return <FilterCheck data={colors} colorFilters={colorFilters} setColorFilters={setColorFilters} category={'Color'} />
        case 2:
          return <FilterCheck data={Brands} brandFilters={brandFilters} setBrandFilters={setBrandFilters} category={'Brand'} />
        case 3:
          return <FilterRadio data={Discount} discount={discount} setDiscount={setDiscount} category={'Discount'} />
        case 4:
          return <FilterRadio data={DeliveryTime} deliveryTime={deliveryTime} setDeliveryTime={setDeliveryTime} category={'Delivery Time'} />
        case 5:
          return <PriceSlider/>
        case 0:
        default:
          return <FilterCheck data={sizes} sizeFilters={sizeFilters} setSizeFilters={setSizeFilters} category={'Size'}/>
      }
  }

  return (
    <Modal
      showModal={props.showFilterModal}
      setShowModal={props.setShowFilterModal}
      position={props.position}
      animationType={props.animationType}
      animationTime={props.animationTime}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth:hp(0.1),
            borderBottomColor:'#c9c9c9'
          }}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              paddingHorizontal: hp(1),
            }}>
            <Text
              style={{
                fontFamily: 'ProductSans-Bold',
                fontSize: hp(2.3),
                color: '#363636',
              }}>
              Filters
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingHorizontal: hp(1),
            }}>
            <Pressable onPress={handlePress} style={{padding: hp(2)}}>
              <Text
                style={{
                  fontFamily: 'ProductSans-Bold',
                  fontSize: hp(1.8),
                  color: '#fb7ca0',
                }}>
                CLEAR ALL
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flex: 9,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View style={{flex: 3}}>
            <ScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              bounces={false}>
              {getFilterCategories()}
            </ScrollView>
          </View>
          <View style={{flex: 6}}>
          <ScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              bounces={false}>
              {getSelectedView()}
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            borderTopWidth:hp(0.1),
            borderTopColor:'#c9c9c9'
          }}>
          <Pressable
            onPress={() => props.setShowFilterModal()}
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
              <Text
                style={{
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                  color: '#363636',
                }}>
                CLOSE
              </Text>
            </View>
          </Pressable>
          <Pressable
            // onPress={}
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
              <Text
                style={{
                  fontSize: hp(1.8),
                  fontFamily: 'ProductSans-Bold',
                  color: '#fb7ca0',
                }}>
                APPLY
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default FiltersModal;
