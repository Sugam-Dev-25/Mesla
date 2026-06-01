import React from 'react';
import HomeBanner from './HomeBanner';
import ProductSlider from "./ProductSlider";
import NewArrival from './NewArrival';
import CategorySlider from './CategorySlider';
const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <CategorySlider/>
      <ProductSlider/>
      <NewArrival/>
      </div>
  )
}

export default HomeComponents;