import { Row ,Col, Typography} from 'antd';
import React from 'react';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { CommonCarpenterCharge } from 'Commonitem/CommonCarpenter';


const CarpenterCharge=()=>{
    return(
        <ResuableComponent 
        componentTitle="CarpenterCharge" 
        commonItemsInfo={CommonCarpenterCharge}
        />
    )
}
export default CarpenterCharge;