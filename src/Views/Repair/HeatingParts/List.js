import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {CommonRepairHeatingParts  } from 'Commonitem/CommonRepair';





const RepairHeatingParts=()=>{
    return(
        <ResuableComponent 
        componentTitle="Heating Parts" 
        commonItemsInfo={CommonRepairHeatingParts}
        />
    )
}
export default RepairHeatingParts;