import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonCosmetic } from 'Commonitem/CommonSupplier';



const cosmetic=()=>{
    return(
        <ResuableComponent 
        componentTitle="Cosmetic Items" 
        commonItemsInfo={CommonCosmetic}
        />
    )
}
export default cosmetic;