import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonRepairTools  } from 'Commonitem/CommonRepair';





const RepairTools=()=>{
    return(
        <ResuableComponent 
        componentTitle="Tools" 
        commonItemsInfo={CommonRepairTools}
        />
    )
}
export default RepairTools;