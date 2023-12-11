import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonSteel } from 'Commonitem/CommonSupplier';



const SupplierSteel=()=>{
    return(
        <ResuableComponent 
        componentTitle="Steel Items" 
        commonItemsInfo={CommonSteel}
        />
    )
}
export default SupplierSteel;