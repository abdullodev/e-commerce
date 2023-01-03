import React from "react";

export interface ProductType {
    id: number;
    title: string;
    description: string;
    discountPercentage:number;
    price:number;
    rating:number;
    stock:number;
    thumbnail:string;
    images:string[];
    category:string;
    brand:string;
  }

export type ProductContextType ={
    products:ProductType[];
    searchedProducts:ProductType[];
    singleProduct:ProductType | undefined;
    category:string[];
    cartItems:any[];
    likeItems:any[];
    title:string;
    err:any;
    isLoading: boolean;
    isProductCome:boolean;
    searchErr:string;
    totalAmount:number;
    setSearchErr:React.Dispatch<React.SetStateAction<any>>;
    setProducts:React.Dispatch<React.SetStateAction<ProductType[]>>;
    setSearchedProducts:React.Dispatch<React.SetStateAction<ProductType[]>>;
    setCategory: React.Dispatch<React.SetStateAction<string[]>>;
    fetchProduct:(id:number) => void;
    fetchData:() => void;
    fetchCategory:() => void;
    fetchCategoryData:(name:string)=>void;
    setTitle:React.Dispatch<React.SetStateAction<string>>;
    addCartProducts:(id:number) => void;
    deleteCartProduct:(id:number) => void;
    addLikeProducts:(id:number) => void;
    isProductmark:(id:number)=>boolean;
    deleteLikeProduct:(id:number) => void;
    increseCount:(id:number) => void;
    decreseCount:(id:number) => void;

}
