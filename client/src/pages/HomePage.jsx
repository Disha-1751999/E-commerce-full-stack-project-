import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import ProductStore from '../store/ProductStore';
import FeatureStore from '../store/FeatureStore';
import Brands from '../components/product/brands';
import Categories from '../components/product/categories';
import Features from '../components/features/features';
import Slider from '../components/product/slider';
import Products from '../components/product/Product';


function HomePage() {

 const {BrandListRequest, CategoryListRequest, SliderListRequest, ListByRemarkRequest}=ProductStore();
 const {FeatureListRequest}=FeatureStore();


 useEffect(()=>{
  (async()=>{
    await BrandListRequest()
    await CategoryListRequest()
    await SliderListRequest()
    await ListByRemarkRequest("new")
    await FeatureListRequest()
  

  })()
 },[])
 
  return (
    <div>
      <Layout>
        <Slider/>
        <Features/>
        <Categories/>
        <Products/>
        <Brands/>
       
      </Layout>
    </div>
  )
}

export default HomePage
