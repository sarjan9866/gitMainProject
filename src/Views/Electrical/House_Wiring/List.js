import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonHouseWiring } from 'Commonitem/CommonElectrical';

const HouseWiring=()=>{
    return(
        <ResuableComponent 
        componentTitle="House Wiring" 
        commonItemsInfo={CommonHouseWiring}
        />
    )
}
export default HouseWiring;