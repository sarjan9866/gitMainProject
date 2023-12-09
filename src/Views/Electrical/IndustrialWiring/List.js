import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonIndustrialWiring } from 'Commonitem/CommonElectrical';





const industrialWiring=()=>{
    return(
        <ResuableComponent 
        componentTitle="Industrial Wiring" 
        commonItemsInfo={CommonIndustrialWiring}
        />
    )
}
export default industrialWiring;