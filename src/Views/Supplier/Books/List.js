import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import {  CommonBooks } from 'Commonitem/CommonSupplier';



const Books=()=>{
    return(
        <ResuableComponent 
        componentTitle="Books Items" 
        commonItemsInfo={CommonBooks}
        />
    )
}
export default Books;