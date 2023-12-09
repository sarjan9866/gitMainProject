import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {CommonPlumbingInCommercial  } from 'Commonitem/CommonPlumber';





const PlumbingInCommercial=()=>{
    return(
        <ResuableComponent 
        componentTitle="Plumbing In Commercial" 
        commonItemsInfo={CommonPlumbingInCommercial}
        />
    )
}
export default PlumbingInCommercial;