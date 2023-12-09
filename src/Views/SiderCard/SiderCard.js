import React from 'react';
import {Card,Row,Col,Image} from 'antd';
import CommonItems from '../../Commonitem/CommonElectrical'
const SiderCard=()=>{
    
    const imageCard=CommonItems.filter((item)=>item.id === "1").map((item)=>item.icon)
    const imageCardsecond=CommonItems.filter((item)=>item.id === "2").map((item)=>item.icon)
    return(
        <Card className="gradient-card ">
          <Row justify="space-between">
              <Col>
                    <Image 
                      src={imageCard} 
                      preview={false}
                    />
                </Col>
                <Col>
                    <Image 
                        src={imageCardsecond} 
                        preview={false}
                    />
                </Col>
          </Row>
        </Card>
    )
}
export default SiderCard;