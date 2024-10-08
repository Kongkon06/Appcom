'use client'
import { ProductProps } from "@/app/Category/page";
import { Details } from "./Details";
import React from "react";


const CategoryCard = ({product}: {product: ProductProps}) => {
    return <div className="h-full rounded-lg w-auto flex shadow-xl shadow-slate-300">
            <img  src={product.image} className="w-1/2 rounded-l-lg object-cover"></img>
            <Details product={product}/>
    </div>
};
export default CategoryCard;