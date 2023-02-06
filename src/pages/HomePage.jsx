import React from 'react';
import MainAds from '../components/ads/home/MainAds';
import ThreeSetAds from '../components/ads/home/ThreeSetAds/ThreeSetAds';
import TwoSetAds from '../components/ads/home/TwoSetAds/TwoSetAds';
import DealsDay from '../components/DealsDay/DealsDay';
import ExclusiveProducts from '../components/ExclusiveProducts/ExclusiveProducts';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import HomeInfo from '../components/HomeInfo/HomeInfo';
import TopCategories from '../components/TopCategories/TopCategories';
import NavBottom from '../components/NavBottom/NavBottom';

const HomePage = () => {

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
};

export default HomePage;
