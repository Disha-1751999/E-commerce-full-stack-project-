import ProductModel from "../models/ProductModel.js";
import ProductReviewModel from "../models/ProductReviewModel.js";
import BrandModel from "../models/BrandModel.js";
import CategoryModel from "../models/CategoriesModel.js";
import ProductSliderModel from "../models/ProductSliderModel.js";
import mongoose from "mongoose";

const ObjectId=mongoose.Types.ObjectId;

export const BrandListServices=async(req,res)=>{

    try {
        const response= await BrandModel.find({});
        return {status: "success", "data": response}
    } catch (error) {
        return {status: "fail", "data": error.toString()}
    }
  
   
}

export const CategoryListServices=async(req,res)=>{

    try {
        const response= await CategoryModel.find({});
        return {status: "success", "data": response}
    } catch (error) {
        return {status: "fail", "data": error.toString()}
    }
   
}

export const SliderListServices=async(req,res)=>{

    try {
        const response= await ProductSliderModel.find({});
        return {status: "success", "data": response}
    } catch (error) {
        return {status: "fail", "data": error.toString()}
    }
    
}

export const ListByBrandServices=async(req,res)=>{

    try {
        let BrandID=new ObjectId(req.params.BrandID);
    let matchStage={$match:{brandID: BrandID}};
    let joinBrandStage={$lookup:{from:'brands', localField:'brandID', foreignField:"_id", as : 'brands'}};
    let joinCategoryStage={$lookup:{from:'categories', localField:'categoryID', foreignField:"_id", as : 'categories'}};
    let unwindBrand= {$unwind: '$brands'};
    let unwindCategory= {$unwind: '$categories'};
    let projectionStage={$project:{'brands._id':0,'categories._id':0,'categoryID':0,'brandID':0}}

    let response= await ProductModel.aggregate([
        matchStage,
        joinBrandStage,
        joinCategoryStage,
        unwindBrand,
        unwindCategory,
        projectionStage
    ]);

    return {status: "success", "data": response};
    } catch (error) {
        return {status: "fail", "data": error.toString()};
    }

    

    
   
}


export const ListByCategoryServices=async(req,res)=>{

    try {
    let CategoryID=new ObjectId(req.params.CategoryID);
    let matchStage={$match:{categoryID: CategoryID}};
    let joinBrandStage={$lookup:{from:'brands', localField:'brandID', foreignField:"_id", as : 'brands'}};
    let joinCategoryStage={$lookup:{from:'categories', localField:'categoryID', foreignField:"_id", as : 'categories'}};
    let unwindBrand= {$unwind: '$brands'};
    let unwindCategory= {$unwind: '$categories'};
    let projectionStage={$project:{'brands._id':0,'categories._id':0,'categoryID':0,'brandID':0}}

    let response= await ProductModel.aggregate([
        matchStage,
        joinBrandStage,
        joinCategoryStage,
        unwindBrand,
        unwindCategory,
        projectionStage
    ]);

    return {status: "success", "data": response};
    } catch (error) {
        return {status: "fail", "data": error.toString()};
    }

    
}


export const ListByRemarkServices=async(req,res)=>{
    try {
        let Remark=req.params.Remark;
        let matchStage={$match:{remark: Remark}};
        let joinBrandStage={$lookup:{from:'brands', localField:'brandID', foreignField:"_id", as : 'brands'}};
        let joinCategoryStage={$lookup:{from:'categories', localField:'categoryID', foreignField:"_id", as : 'categories'}};
        let unwindBrand= {$unwind: '$brands'};
        let unwindCategory= {$unwind: '$categories'};
        let projectionStage={$project:{'brands._id':0,'categories._id':0,'categoryID':0,'brandID':0}}
    
        let response= await ProductModel.aggregate([
            matchStage,
            joinBrandStage,
            joinCategoryStage,
            unwindBrand,
            unwindCategory,
            projectionStage
        ]);
    
        return {status: "success", "data": response};
        } catch (error) {
            return {status: "fail", "data": error.toString()};
        }
    
}
  

export const ListBySimilarityServices=async(req,res)=>{
    try {
        let CategoryID=new ObjectId(req.params.CategoryID);
        let matchStage={$match:{categoryID: CategoryID}};
        let limitStage={$limit: 5};
        let joinBrandStage={$lookup:{from:'brands', localField:'brandID', foreignField:"_id", as : 'brands'}};
        let joinCategoryStage={$lookup:{from:'categories', localField:'categoryID', foreignField:"_id", as : 'categories'}};
        let unwindBrand= {$unwind: '$brands'};
        let unwindCategory= {$unwind: '$categories'};
        let projectionStage={$project:{'brands._id':0,'categories._id':0,'categoryID':0,'brandID':0}}
    
        let response= await ProductModel.aggregate([
            matchStage,
            limitStage,
            joinBrandStage,
            joinCategoryStage,
            unwindBrand,
            unwindCategory,
            projectionStage
        ]);
    
        return {status: "success", "data": response};
        } catch (error) {
            return {status: "fail", "data": error.toString()};
        }
    
}

export const ProductDetailsServices=async(req,res)=>{
    
    try {
        let ProductID= new ObjectId(req.params.ProductID); 
        let matchStage={$match:{_id: ProductID}};
        let joinBrandStage={$lookup:{from:'brands', localField:'brandID', foreignField:"_id", as : 'brands'}};
        let joinCategoryStage={$lookup:{from:'categories', localField:'categoryID', foreignField:"_id", as : 'categories'}};
        let joinProductDetailsStage={$lookup:{from:'productdetails', localField:'_id', foreignField:"productID", as : 'details'}};
        let unwindBrand= {$unwind: '$brands'};
        let unwindCategory= {$unwind: '$categories'};
        let unwindProductDetails= {$unwind: '$details'};
        let projectionStage={$project:{'brands._id':0,'categories._id':0,'categoryID':0,'brandID':0,'productDetails._id':0}}
    
        let response= await ProductModel.aggregate([
            matchStage,
            joinBrandStage,
             joinCategoryStage,
           joinProductDetailsStage,
           unwindBrand,
             unwindCategory,
           unwindProductDetails,
             projectionStage
        ]);
    
        return {status: "success", "data": response};
        } catch (error) {
            return {status: "fail", "data": error.toString()};
        }
    



}

export const ListByKeywordServices=async(req,res)=>{
 
    try {
        
        let SearchRegex={'$regex':req.params.Keyword, '$options':'i'} ;
        let SearchParams=[{title:SearchRegex},{ shortDes: SearchRegex}];
        let SearchQuery={$or:SearchParams};

        let matchStage={$match:SearchQuery};
        let joinBrandStage={$lookup:{from:'brands', localField:'brandID', foreignField:"_id", as : 'brands'}};
        let joinCategoryStage={$lookup:{from:'categories', localField:'categoryID', foreignField:"_id", as : 'categories'}};
        
        let unwindBrand= {$unwind: '$brands'};
        let unwindCategory= {$unwind: '$categories'};
        
        let projectionStage={$project:{'brands._id':0,'categories._id':0,'categoryID':0,'brandID':0}}
    
        let response= await ProductModel.aggregate([
            matchStage,
            joinBrandStage,
            joinCategoryStage,
            unwindBrand,
            unwindCategory,
            projectionStage
        ]);

        
    
        return {status: "success", "data": response};
        } catch (error) {
            return {status: "fail", "data": error.toString()};
        }
    



   
}




export const ListByFilterServices=async(req,res)=>{
        try {
    
            let matchConditions = {};
            if (req.body['categoryID']) {
                matchConditions.categoryID = new ObjectId(req.body['categoryID']);
            }
            if (req.body['brandID']) {
                matchConditions.brandID = new ObjectId(req.body['brandID']);
            }
            let MatchStage = { $match: matchConditions };
    
    
    
    
    
    
            let AddFieldsStage = {
                $addFields: { numericPrice: { $toInt: "$price" }}
            };
            let priceMin = parseInt(req.body['priceMin']);
            let priceMax = parseInt(req.body['priceMax']);
            let PriceMatchConditions = {};
            if (!isNaN(priceMin)) {
                PriceMatchConditions['numericPrice'] = { $gte: priceMin };
            }
            if (!isNaN(priceMax)) {
                PriceMatchConditions['numericPrice'] = { ...(PriceMatchConditions['numericPrice'] || {}), $lte: priceMax };
            }
            let PriceMatchStage = { $match: PriceMatchConditions };
    
    
    
    
    
    
            let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
            let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
            let UnwindBrandStage={$unwind:"$brand"}
            let UnwindCategoryStage={$unwind:"$category"}
            let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
    
            let data= await  ProductModel.aggregate([
                MatchStage,
                AddFieldsStage,
                PriceMatchStage,
                JoinWithBrandStage,JoinWithCategoryStage,
                UnwindBrandStage,UnwindCategoryStage, ProjectionStage
            ])

            return {status:"success",data:data}
    
        }catch (e) {
            return {status:"fail",data:e.toString()}
        }
   
    
}






export const ProductReviewListServices=async(req,res)=>{
    try {
        let ProductID= new ObjectId(req.params.ProductID); 
        
        let MatchStage={$match:{productID:ProductID}}
        let LimitToOneProfile = {
            $addFields: {
                profile: { $arrayElemAt: ["$profile", 0] }
            }
        };

        let JoinWithProfileStage= {$lookup:{from:"customerprofiles",localField:"userID",foreignField:"userID",as:"profile"}};
        let UnwindProfileStage={$unwind:"$profile"}
        let ProjectionStage= {$project: {'des': 1, 'rating': 1, 'profile.cus_name': 1}}

        let response= await  ProductReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            LimitToOneProfile,
            UnwindProfileStage,
           ProjectionStage
        ])

       
    
        return {status: "success", "data": response};
        } catch (error) {
            return {status: "fail", "data": error.toString()};
        }
    

}



export const CreateReviewServices=async(req,res)=>{
    try{
        
        let reqBody=req.body;
        reqBody.userID=req.headers.user_id;
        let data=await ProductReviewModel.create(reqBody)
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e.toString()}
    }
}

