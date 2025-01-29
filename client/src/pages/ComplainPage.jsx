import React, { useEffect } from 'react'
import LegalContents from '../components/features/LegalContents'
import Layout from '../components/layout/Layout'
import FeatureStore from '../store/FeatureStore';

function ComplainPage() {
  const {LegalDetailsRequest}=FeatureStore();

  useEffect(()=>{
    (async()=>{
      await LegalDetailsRequest('complain')
    })()
  },[])
  return (
    <Layout>
      <LegalContents/>
    </Layout>
  )
}

export default ComplainPage
