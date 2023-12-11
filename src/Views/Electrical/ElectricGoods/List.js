import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonElectricGoods } from 'Commonitem/CommonElectrical';





const ElectricGoods=()=>{
    return(
        <ResuableComponent 
        componentTitle="Electric Goods" 
        commonItemsInfo={CommonElectricGoods}
        />
    )
}
export default ElectricGoods;