import React from 'react';
import MainAds from '../components/ComercialAds/MainAds';
import ThreeSetAds from '../components/ComercialAds/HomeAds/ThreeSetAds/ThreeSetAds';
import TwoSetAds from '../components/ComercialAds/HomeAds/TwoSetAds/TwoSetAds';
import DealsDay from '../components/DealsDay/DealsDay';
import ExclusiveProducts from '../components/ExclusiveProducts/ExclusiveProducts';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import HomeInfo from '../components/HomeInfo/HomeInfo';
import TopCategories from '../components/TopCategories/TopCategories';
import NavBottom from '../components/NavBottom/NavBottom';

function Homepage() {
  return (
    <>
      <MainAds />
      <HomeInfo />
      <DealsDay />
      <TopCategories />
      <ThreeSetAds />
      <FeaturedProducts />
      <TwoSetAds />
      <ExclusiveProducts />
      <NavBottom />
    </>
  );
}

export default Homepage
