import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {  CommonSupplierPlumbingItems } from 'Commonitem/CommonSupplier';



const PlumbingItems=()=>{
    return(
        <ResuableComponent 
        componentTitle="Plumbing Items" 
        commonItemsInfo={CommonSupplierPlumbingItems}
        />
    )
}
export default PlumbingItems;