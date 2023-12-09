import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonPaintingCharge } from 'Commonitem/CommonPainter';


const PainterCharge=()=>{
    return(
        <ResuableComponent 
        componentTitle="Charge" 
        commonItemsInfo={CommonPaintingCharge}
        />
    )
}
export default PainterCharge;