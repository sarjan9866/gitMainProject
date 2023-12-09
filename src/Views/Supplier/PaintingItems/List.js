import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {  CommonSupplierPaintingItems } from 'Commonitem/CommonSupplier';



const PaintingItems=()=>{
    return(
        <ResuableComponent 
        componentTitle="Painting Items" 
        commonItemsInfo={CommonSupplierPaintingItems}
        />
    )
}
export default PaintingItems;