import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {CommonPlumbingGoods  } from 'Commonitem/CommonPlumber';





const plumbingGoods=()=>{
    return(
        <ResuableComponent 
        componentTitle="Plumbing Goods" 
        commonItemsInfo={CommonPlumbingGoods}
        />
    )
}
export default plumbingGoods;