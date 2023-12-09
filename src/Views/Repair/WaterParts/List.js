import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonRepairWaterParts } from 'Commonitem/CommonRepair';





const WaterParts=()=>{
    return(
        <ResuableComponent 
        componentTitle="Water Parts" 
        commonItemsInfo={CommonRepairWaterParts}
        />
    )
}
export default WaterParts;