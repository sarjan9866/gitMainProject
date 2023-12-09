import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {CommonRepairFreezeAC  } from 'Commonitem/CommonRepair';





const FreezeAC=()=>{
    return(
        <ResuableComponent 
        componentTitle="Freeze AC" 
        commonItemsInfo={CommonRepairFreezeAC}
        />
    )
}
export default FreezeAC;