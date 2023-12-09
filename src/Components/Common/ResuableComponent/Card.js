import { Row,Image ,Card,Col,Rate,Button} from 'antd';

import React from 'react';

const CommonCard=(props)=>{
    return(
        <Card 
           style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
          cover={
          <Image 
            src={props.image} 
            style={{height:'200px'}}
            preview={false}
          />}
          
        >
            <Row justify='start'>
                <Col>
                  {props.name}
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>
                 price : ${props.price}
                </Col>
                <Col>
                  discount : {props.discount}%
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>
                  address : {props.address}
                </Col>
                <Col>
                  <Rate defaultValue={props.rate}/>
                </Col>
            </Row>
            {/* <Row>
                <Button>
                    Shop Now
                </Button>
            </Row> */}
        </Card>
    )
}
export default CommonCard;