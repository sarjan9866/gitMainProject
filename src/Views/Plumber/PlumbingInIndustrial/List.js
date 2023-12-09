import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {CommonPlumbingInIndustrial  } from 'Commonitem/CommonPlumber';





const plumbingInIndustrial=()=>{
    return(
        <ResuableComponent 
        componentTitle="Plumbing In Industrial" 
        commonItemsInfo={CommonPlumbingInIndustrial}
        />
    )
}
export default plumbingInIndustrial;