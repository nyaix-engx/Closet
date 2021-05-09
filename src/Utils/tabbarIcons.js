import React from 'react';
import HomeFilled from '../Assets/Svg/HOME_FILLED.svg'
import CategoryFilled from '../Assets/Svg/CATEGORY_FILLED.svg'
import ProfileFilled from '../Assets/Svg/PROFILE_FILLED.svg'
import FavFilled from '../Assets/Svg/FAV_FILLED.svg'
import HomeOutline from '../Assets/Svg/HOME_OUTLINE.svg';
import CategoryOutline from '../Assets/Svg/CATEGORY_OUTLINE.svg';
import ProfileOutline from '../Assets/Svg/PROFILE_OUTLINE.svg';
import FavOutline from '../Assets/Svg/FAV_OUTLINE.svg'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const iconsSet1=[
  <HomeFilled height={hp(2.4)} width={hp(2.4)}/>,
  <CategoryFilled height={hp(2.4)} width={hp(2.4)}/>,
  <ProfileFilled height={hp(2.4)} width={hp(2.4)}/>,
  <FavFilled height={hp(2.4)} width={hp(2.4)} />,
]

export const iconsSet2=[
  <HomeOutline height={hp(2.4)} width={hp(2.4)}/>,
  <CategoryOutline height={hp(2.4)} width={hp(2.4)}/>,
  <ProfileOutline height={hp(2.4)} width={hp(2.4)}/>,
  <FavOutline height={hp(2.4)} width={hp(2.4)}/>
]