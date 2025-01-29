import { FeatureListService, LegalDetailsService} from "../services/FeaturesServices.js";

export const FeatureList= async (req, res)=>{
    let result= await FeatureListService();
    res.status(200).json(result);
}

export const LegalDetails= async (req, res)=>{
    let result= await LegalDetailsService(req);
    res.status(200).json(result);
}