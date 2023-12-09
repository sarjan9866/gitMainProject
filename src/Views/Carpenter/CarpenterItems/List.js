import React from 'react';
import {CommonCarpenterItems} from 'Commonitem/CommonCarpenter';
import ResuableComponent from 'Components/Common/ResuableComponent/List';


const CarpenterItems=()=>{
    return(
        <ResuableComponent 
        componentTitle="CarpenterItems" 
        commonItemsInfo={CommonCarpenterItems}
        />
    )
}
export default CarpenterItems;