import React from 'react'
import CategoriesSkeleton from '../../skeleton/CategoriesSkeleton';
import ProductStore from '../../store/ProductStore';
import { Link } from 'react-router-dom';

function Categories() {
  const {CategoryList}=ProductStore();
  return (
    <>
    {CategoryList===null?(<CategoriesSkeleton/>):(
       <div className="section">
       <div className="container">
         <div className="row">
         <h1 className="headline-4 text-center my-2 p-0">Top Categories</h1>
         <span className="bodySmal mb-5 text-center">Explore a World of Choices Across Our Most Popular <br
/>Shopping Categories </span>

           {
             CategoryList.map((item,index)=>{
               return (
                <div key={index} className="col-6 col-lg-8r text-center col-md-8r p-2">
                <Link to={`/by-category/${item._id}`} className="card h-100 rounded-3 bg-light">
                <div className="card-body">
                <img alt="" className="w-75" src={item.categoryImg} style={{ width: "200px", height: "100px", objectFit: "fill", border:"none" }}/>
                <p className="bodySmal mt-3">{item.categoryName}</p>
                </div>
                </Link>
                </div>
               )
             })
           }
         </div>
       </div>
     </div>
    )}
     
    </>
  );
}

export default Categories
