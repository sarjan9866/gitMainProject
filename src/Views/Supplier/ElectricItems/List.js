import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {  CommonSupplierElectricItems } from 'Commonitem/CommonSupplier';



const SupplierElectricItems=()=>{
    return(
        <ResuableComponent 
        componentTitle="Electric Items" 
        commonItemsInfo={CommonSupplierElectricItems}
        />
    )
}
export default SupplierElectricItems;