import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonCommercialWiring } from 'Commonitem/CommonElectrical';



const CommercialWiring=()=>{
    return(
        <ResuableComponent 
        componentTitle="Commercial Wiring" 
        commonItemsInfo={CommonCommercialWiring}
        />
    )
}
export default CommercialWiring;