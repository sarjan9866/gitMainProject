import { Card, Col, Row, Typography } from "antd"

const Profile=({data, title})=>{
    return(
        <>
         <Row  className="componentContainer" justify="center">
                <Col span={24}>

            <Row justify="center">
                <Typography.Title level={3}>
                    {title}
                </Typography.Title>
            
            
            </Row>
            </Col>

            <Row gutter={[8,8]} >
                <Col span={24}>
        
        <Row  gutter={[16, 16]}>
            {
                data?.map((item)=>(
                    <Col key={item.id} xs={{ span: 24 }} lg={{ span: 6 }} sm={{span:12}} >
                        <Card>
                        <Row  gutter={[8, 4]} align="middle">
                        <Col span={18}>
                        <Row>
                            <div className="profilecard">
                            Name :{item.name} 

                            </div>
                        </Row>
                        <Row>
                            <div className="profilecard">
                            contact :{item.contact} 

                            </div>
                        </Row>

                        <Row>
                            <div className="profilecard">
                            proffession :{item.proffession } 

                            </div>
                        </Row>
                         <Row>
                            <div className="profilecard">
                            Address :{item.address} 

                            </div>
                        </Row>
                         <Row>
                            <div className="profilecard">
                            Experience :{item.experience} 

                            </div>
                        </Row>
                        </Col>
                        <Col span={6}>
                        <div style={{heigth:'auto', width:'100%'}}>
                         {item.image}
                        </div>
                        </Col>
                      </Row>
                        </Card>
                    
                    </Col>
                ))
            }
        </Row>
        
        </Col>
            </Row>
        </Row>
        </>
    
    )
}
export default Profile
