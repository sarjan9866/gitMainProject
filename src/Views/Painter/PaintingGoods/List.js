import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonPaintingGoods } from 'Commonitem/CommonPainter';


const PainterColorList=()=>{
    return(
        <ResuableComponent 
        componentTitle="Painting Goods" 
        commonItemsInfo={CommonPaintingGoods}
        />
    )
}
export default PainterColorList;