import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonElectronic } from 'Commonitem/CommonSupplier';



const SupplierElectronic=()=>{
    return(
        <ResuableComponent 
        componentTitle="Electronic Items" 
        commonItemsInfo={CommonElectronic}
        />
    )
}
export default SupplierElectronic;