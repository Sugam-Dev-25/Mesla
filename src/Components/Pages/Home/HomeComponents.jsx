import React from 'react';
import HomeBanner from './HomeBanner';
import ProductSlider from "./ProductSlider";
import NewArrival from './NewArrival';
import CategorySlider from './CategorySlider';
import GallerySlider from './GallerySlider';
import BestSeller from './BestSeller';
import Features from './Features';
const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <CategorySlider/>
      <ProductSlider/>
      <BestSeller/>
      <NewArrival/>
      <Features/>
      <GallerySlider/>
      
      </div>
  )
}

export default HomeComponents;