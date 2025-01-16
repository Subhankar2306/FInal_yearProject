import React from 'react';
import SearchBox from './components/SearchBox';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import FeedbackSection from './components/FeedbackSection';
import BlogSection from './components/BlogSection';
import CarSection from './components/CarSection';
import ServiceType from './components/ServiceType';

function Home() {
  
  return (
    <main className='bg-[#f7f7f7]'>
      {/* Hero Section with Carousel */}
      <HeroSection/>

     {/* search box  */}
      <SearchBox/>

      {/* service type */}
      <ServiceType/>

      {/* {/* filtering section 
      <FilterSection/>

      <CarSection/>  */}

      {/* Blog Section */}
      <BlogSection/>

      {/* Feedback Section with Improved Design */}
      <FeedbackSection/>

      
    </main>
  );
}

export default Home;
