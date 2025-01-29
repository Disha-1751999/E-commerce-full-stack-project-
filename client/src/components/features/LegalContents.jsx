import React from "react";
import FeatureStore from "../../store/FeatureStore";
import LegalContentSkeleton from "../../skeleton/LegalContentSkeleton";
import parse  from 'html-react-parser';

function LegalContents() {

  const {LegalDetails}=FeatureStore()
  return (
   
    <>

    {LegalDetails===null?(<LegalContentSkeleton/>):(
      <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card p-4">
            {parse(LegalDetails[0]["description"])}
          </div>
        </div>
      </div>
    </div>
    )}
      
    </>
  );
}

export default LegalContents;
