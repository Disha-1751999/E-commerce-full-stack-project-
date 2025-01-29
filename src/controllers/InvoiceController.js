import {CreateInvoiceService,PaymentSuccessService,PaymentFailService,PaymentCancelService,PaymentIPNService,InvoiceListService, InvoiceProductListService} from '../services/InvoiceServices.js';

export const CreateInvoice= async (req, res)=>{
    let result= await CreateInvoiceService(req);
    res.status(200).json(result);
}


export const PaymentSuccess= async (req, res)=>{
    let result= await PaymentSuccessService(req);
    res.redirect('http://localhost:5173/order')
    
}

export const PaymentFail= async (req, res)=>{
    let result= await PaymentFailService(req);
    res.redirect('/order')
   
}


export const PaymentCancel= async (req, res)=>{
    let result= await PaymentCancelService(req);
    res.redirect('/order')
    
}

export const PaymentIPN= async (req, res)=>{
    let result= await PaymentIPNService(req);
    res.redirect('/order')
    
}

export const InvoiceList= async (req, res)=>{
    let result= await InvoiceListService(req);
    res.status(200).json(result);
}

export const InvoiceProductList= async (req, res)=>{
    let result= await InvoiceProductListService(req);
    res.status(200).json(result);
}

