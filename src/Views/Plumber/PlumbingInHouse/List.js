import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {CommonPlumbingInHouse  } from 'Commonitem/CommonPlumber';





const PlumbingInHouse=()=>{
    return(
        <ResuableComponent 
        componentTitle="Plumbing In House" 
        commonItemsInfo={CommonPlumbingInHouse}
        />
    )
}
export default PlumbingInHouse;