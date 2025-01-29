import React, { useEffect } from 'react'
import LegalContents from '../components/features/LegalContents'
import Layout from '../components/layout/Layout'
import FeatureStore from '../store/FeatureStore';

function HowToBuyPage() {
  const {LegalDetailsRequest}=FeatureStore();

  useEffect(()=>{
    (async()=>{
      await LegalDetailsRequest('howtobuy')
    })()
  },[])
  return (
    <Layout>
      <LegalContents/>
    </Layout>
  )
}

export default HowToBuyPage
