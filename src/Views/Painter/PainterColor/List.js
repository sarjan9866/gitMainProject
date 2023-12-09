import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonPainterColor } from 'Commonitem/CommonPainter';


const PainterColorList=()=>{
    return(
        <ResuableComponent 
        componentTitle="Color" 
        commonItemsInfo={CommonPainterColor}
        />
    )
}
export default PainterColorList;