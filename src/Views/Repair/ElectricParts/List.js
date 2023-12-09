import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {CommonRepairElectricParts  } from 'Commonitem/CommonRepair';





const ElectricParts=()=>{
    return(
        <ResuableComponent 
        componentTitle="Electric Parts" 
        commonItemsInfo={CommonRepairElectricParts}
        />
    )
}
export default ElectricParts;