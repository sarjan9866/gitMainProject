import React from 'react'
import {Menu ,Typography,Space} from 'antd';
import history from "Utils/history";
import { LogoutOutlined,LoginOutlined} from '@ant-design/icons';


export const  servicesmenu = ()=>{

    const handelElectricGoods=()=>{
        history.push('/electrical/goods')
   }
    const handelHouseWiring=()=>{
         history.push(`/electrical/housewiring`)
    }
    const handelIndustrialWiring=()=>{
        history.push('/electrical/industrialwiring')
   }
    const handelCommercialWiring=()=>{
        history.push('/electrical/commercialwiring')
   }
    
    const handelElectricain=()=>{
        history.push('/electrical/electrician')
   }

    return(
        <Menu>
             <Menu.Item key="0">
            <p onClick={handelElectricGoods}>ElectricGoods</p>
            </Menu.Item>

            <Menu.Item key="1">
                <p onClick={handelHouseWiring}>HouseWiring</p>
            </Menu.Item>
            <Menu.Item key="2">
            <p  onClick={handelIndustrialWiring}>IndustrialWiring</p>
            </Menu.Item>
            <Menu.Item key="3">
            <p onClick={handelCommercialWiring}>CommercialWiring</p>
            </Menu.Item>
           
            <Menu.Item key="5">
            <p onClick={handelElectricain}>Electricain</p>
            </Menu.Item>
            
          
        </Menu>
    )
}
export const  painterMenu = ()=>{
    const handleGoods=()=>{
         history.push('/painter/goods')
    }
    const handlePainter=()=>{
         history.push('/painter')
    }
    const handlePaintingCharge=()=>{
        history.push('/painter/paintingCharge')
   }
    return(
        <Menu>
            <Menu.Item key="1">
                <p onClick={handleGoods}>Painting_Goods</p>
            </Menu.Item>
            <Menu.Item key="2">
            <p onClick = {handlePaintingCharge}>Painting_Charge</p>
            </Menu.Item>
            <Menu.Item key="3">
            <p onClick = {handlePainter}>Painter</p>
            </Menu.Item>
        </Menu>
    )
}
export const  plumber = ()=>{
    // const handelElectronicItem=()=>{
    //      history.push(`electronic/item`)
 
    // }
    const handlePlumbingGoods=()=>{
        history.push(`/plumber/goods`)
    }
    const handlePlumber=()=>{
        history.push(`/plumber/profile`)
   }
   const handlePlumbingInIndustrial=()=>{
    history.push(`/plumber/plumbingInIndustrial`)
    
}
const handlePlumbingInCommercial=()=>{
    history.push(`/plumber/plumbingInCommercial`)
}
const handelPlumbingInHouse=()=>{
    history.push(`/plumber/plumbingInHouse`)
}


    return(
        <Menu>
            <Menu.Item key="0">
                <p onClick={handlePlumbingGoods}>plumbing-Items</p>
            </Menu.Item>
            <Menu.Item key="1">
                <p onClick={handelPlumbingInHouse}>plumbing-in-house</p>
            </Menu.Item>
            <Menu.Item key="2">
            <p onClick ={handlePlumbingInIndustrial}>plumbing-industrial</p>
            </Menu.Item>
            <Menu.Item key="3">
            <p onClick ={handlePlumbingInCommercial} >plumbing-commercial</p>
            </Menu.Item>
            
            <Menu.Item key="5">
            <p onClick  = {handlePlumber}>plumbier</p>
            </Menu.Item>
        </Menu>
    )
}
export const  carpenter = ()=>{
    const handelcarpenterItems=()=>{
        history.push(`/carpenter/carpenterItems`)
    }
   
    const handleCarpenterCharge=()=>{
        history.push(`/carpenter/carpentercharge`)
   }

    const handelcarpenter=()=>{
         history.push(`/carpenter/profile`)
    }
    
    

    
    
    return(
        <Menu>

            <Menu.Item key="1">
            <p onClick={handelcarpenterItems}>CarpenterItems</p>
            </Menu.Item>

            <Menu.Item key="2">
                <p onClick={handleCarpenterCharge}>CarpenterCharge</p>
            </Menu.Item>
            
            <Menu.Item key="3">
            <p onClick={handelcarpenter}>Carpenter</p>
            </Menu.Item>  
            
        </Menu>
    )
}
export const  manPower = ()=>{
    const handelMonthly=()=>{
        history.push(`/manPower/monthly`)
    }
    const handelFullTime=()=>{
         history.push(`/manPower/fullTime`)
    }
    const handelManPowerPartTime=()=>{
        history.push(`/manPower/partTime`)
    }
    return(
        <Menu>

          <Menu.Item key="1">
            <p onClick={handelMonthly}>Monthly</p>
            </Menu.Item>

            <Menu.Item key="2">
            <p onClick={handelFullTime}>Full-DayHelper</p>
            </Menu.Item>

            <Menu.Item key="3">
                <p onClick={handelManPowerPartTime}>Part-TimeHelper</p>
            </Menu.Item>
           
        </Menu>
    )
}

   
export const  suppliresmenu = ()=>{
    const handelElectronic=()=>{
         history.push(`/supplier/electronic`)
    }
    const handelClothes=()=>{
         history.push(`/supplier/Clothes`)
    }
    const handelCosmetic=()=>{
         history.push(`/supplier/Cosmetic`)
    }
    const handelBooks=()=>{
         history.push(`/supplier/Books`)
    }
    const handelSupplierSteelItems=()=>{
         history.push(`/supplier/Steel`)
    }
    
    
    return(
        <Menu>
            <Menu.Item key="1">
                <p onClick={handelElectronic}>Electronic-Items</p>
            </Menu.Item>
            
            <Menu.Item key="3">
            <p onClick={handelClothes}>Clothes-Items</p>
            </Menu.Item>
            <Menu.Item key="4">
            <p onClick={handelCosmetic}>Cosmetic-Items</p>
            </Menu.Item>
            <Menu.Item key="5">
            <p onClick={handelBooks}>Books_Items</p>
            </Menu.Item>

            <Menu.Item key="6">
            <p onClick={handelSupplierSteelItems}>Steel_Items</p>
            </Menu.Item>
            
            
        </Menu>
    )
}

    export const Repair = ()=>{
       
        const handelElectricParts=()=>{
             history.push(`/repair/electricParts`)
        }
        const handelWaterParts=()=>{
             history.push(`/repair/waterParts`)
        }
        const handelHeatingParts=()=>{
             history.push(`/repair/heatingParts`)
        }
        const handelFreezeAC=()=>{
             history.push(`/repair/freezeAC`)
        }
        const handelTools=()=>{
             history.push(`/repair/tools`)
        }
       
        return(
            <Menu>
                 <Menu.Item key="1">
                    <p onClick={handelElectricParts}>ElectricParts</p>
                </Menu.Item>
                 <Menu.Item key="2">
                    <p onClick={handelWaterParts}>WaterParts</p>
                </Menu.Item>

                 <Menu.Item key="3">
                    <p onClick={handelHeatingParts}>HeatingParts</p>
                </Menu.Item>
                
                 <Menu.Item key="4">
                    <p onClick={handelFreezeAC}>FreezeAC</p>
                </Menu.Item>
                 <Menu.Item key="5">
                    <p onClick={handelTools}>Tools</p>
                </Menu.Item>

                
            </Menu>
        )
    

    
}
   

export const  mechanicmenu = ()=>{
  
    const handelElectricItems=()=>{
         history.push(`supplier/electricitems`)
    }
    return(
        <Menu>
            <Menu.Item key="1">
                <p onClick={handelElectricItems}>Electric-Items</p>
            </Menu.Item>
            <Menu.Item key="2">
            <p>Bick</p>
            </Menu.Item>
            <Menu.Item key="3">
            <p>Heavy</p>
            </Menu.Item>
        </Menu>
    )
}
export const admindashboard = (
    <Menu style={{marginTop:"1.5rem",borderRadius:'4px'}}>
      <Menu.Item>
        <Space direction="horizontal" size="large">
          <LogoutOutlined /> 
          <Typography.Text >
            Log Out
          </Typography.Text>
        </Space>
      </Menu.Item>
      <Menu.Item>
        <Space direction="horizontal" size="large">
          <LoginOutlined/> 
          <Typography.Text >
            Sign Up
          </Typography.Text>
        </Space>
      </Menu.Item>
    </Menu>
  );
