import { Row ,Col, Typography} from 'antd';
import React from 'react';
import CommonCard from './Card';

const ResuableComponent=({
    commonItemsInfo,
    componentTitle
})=>{
    return(
        <Row  className="componentContainer" justify="center">
            <Row justify="center">
                <Typography.Title level={3}>
                {componentTitle}
                </Typography.Title>
            
            </Row>
            <Row gutter={[8,8]}>
                {
                    commonItemsInfo.map((item,index)=>(
                        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} key={index}>
                            <CommonCard
                            name={item.name}
                            image={item.icon}
                            discount={item.discount}
                            price={item.price}
                            rate={item.rate}
                            address={item.address}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Row>
    )
}
export default ResuableComponent;