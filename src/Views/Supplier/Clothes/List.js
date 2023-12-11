import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {  CommonClothes } from 'Commonitem/CommonSupplier';



const clothes=()=>{
    return(
        <ResuableComponent 
        componentTitle="Clothes Items" 
        commonItemsInfo={CommonClothes}
        />
    )
}
export default clothes;