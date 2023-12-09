import React from 'react';
import {Row,Col,Spin} from 'antd';
const LoaderSpin=()=>{
    return(
        <Row justify='center' align='middle' style={{marginTop:'20%',backgroundColor:'#f0f2f5'}}>
           <Col>
                <Spin />
           </Col>
        </Row>
    )
}
export default LoaderSpin