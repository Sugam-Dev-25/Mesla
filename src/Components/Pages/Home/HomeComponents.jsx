import React from 'react';
import HomeBanner from './HomeBanner';
import ProductSlider from "./ProductSlider";
import NewArrival from './NewArrival';
import CategorySlider from './CategorySlider';
import GallerySlider from './GallerySlider';
import BestSeller from './BestSeller';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Features from './Features';
import WhyChooseUs from './WhyChooseUs';
const HomeComponents = ({ searchTerm }) => {

  return (
    <div>
      <HomeBanner/>
      <CategorySlider/>
     <ProductSlider searchTerm={searchTerm} />
      <BestSeller/>
      <NewArrival/>
      <WhyChooseUs/>    
      <Contact/>
      <Testimonials/>
      <Features/>
      <GallerySlider/>      
    </div>
  )
}

export default HomeComponents;