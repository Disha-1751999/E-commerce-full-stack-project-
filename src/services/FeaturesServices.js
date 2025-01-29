import FeaturesModel from "../models/FeaturesModel.js";
import LegalModel from "../models/LegalModel.js";

export const FeatureListService = async (req) => {
    try {
        let data= await FeaturesModel.find({});
        return {status:"success","data":data};
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

export const LegalDetailsService = async (req) => {

    let type=req.params.type
    try {
        let data= await LegalModel.find({type:type});
        return {status:"success","data":data};
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}


