import React, {Component, useState, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CategoryComp from '../../Components/CategoryScreenComps/CategoryComp';
import TitleHeader from '../../Components/CategoryScreenComps/TitleHeader';
import {categories} from '../../Utils/arrays';
import { Platform, SafeAreaView, useWindowDimensions } from 'react-native'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CategoryScreen = () => {
  const [categoryTitleState, setCategoryTitleState] = useState(new Array(categories.length).fill(false,0,categories.length));
  // const [height,setHeight]=useState(null)
  const {height}=useWindowDimensions()
  const scrollRef=useRef()
  // const onLayout=(e)=>{
  //   setHeight(e.nativeEvent.layout.height)
  // }
  const getCategories = () => {
    return categories.map((category, index) => {
      return (
        <CategoryComp
          height={Platform.OS==='android'? (height-hp(11.7))/categories.length : (height-hp(22.7))/categories.length }
          key={index}
          index={index}
          category={category}
          categoryTitleState={categoryTitleState}
          setCategoryTitleState={setCategoryTitleState}
          scrollRef={scrollRef}
        />
      );
    });
  };

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}} >
      <TitleHeader title='Categories'/>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} ref={scrollRef}>
        {getCategories()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
