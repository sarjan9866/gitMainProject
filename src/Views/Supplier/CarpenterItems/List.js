import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {  CommonSupplierCarpenterItems } from 'Commonitem/CommonSupplier';



const CarpenterItems=()=>{
    return(
        <ResuableComponent 
        componentTitle="Carpenter Items" 
        commonItemsInfo={CommonSupplierCarpenterItems}
        />
    )
}
export default CarpenterItems;