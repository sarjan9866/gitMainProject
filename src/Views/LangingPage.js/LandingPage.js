import React from 'react';
import AdvertiesmentCaresol from 'Views/Advertisment/AdvertiesmentCaresol';
import ResuableComponent from 'Components/Common/ResuableComponent/List';
import { commonElectricalGoods, CommonPlumbingGoods, CommonCarpenterGoods,CommonPaintingGoods, commonProfileImageList} from 'Commonitem/LandingPage';

import Profile from 'Profile';
import { Image } from 'antd';


const LandingPage=()=>{
    return(
        <React.Fragment>
        <AdvertiesmentCaresol/>

        <ResuableComponent 
            componentTitle="Electrical Goods" 
            commonItemsInfo={commonElectricalGoods}
        />
        <ResuableComponent 
            componentTitle="Plumbing Goods" 
            commonItemsInfo={CommonPlumbingGoods}
        />
        <ResuableComponent 
            componentTitle="Carpenter Goods" 
            commonItemsInfo={CommonCarpenterGoods}
        />
        <ResuableComponent 
            componentTitle="Painting Goods" 
            commonItemsInfo={CommonPaintingGoods}
        />

        
    <Profile 
        data={data} 
        title = "Employee Profile"
    />
          
    </React.Fragment>
    )
}
export default LandingPage

const data=[
    {
name:"Sarjan Sabkholi",
contact:'9843232104',
address:'Sunakoti',
proffession:"Electrian",
experience: "2 years",
image:<Image src={commonProfileImageList.electricalImageOne} alt="noimage" className='image'/>,
id:1
},

{
    name:"Sarjan Sabkholi",
    contact:'9843232104',
    address:'Sunakoti',
    proffession:"Electrian",
  image:<Image src={commonProfileImageList.electricalImageTwo} alt="noimage"/>,

    id:2
    },
    {
        name:"Sarjan Sabkholi",
        contact:'9866801809',
        address:'Sunakoti',
        proffession:"Electrian",
    //   image:<Image src={fullTimeProfile.fullTime3} alt="noimage"/>,

        id:3
        },
        {
            name:"Sarjan Sabkholi",
            contact:'9843232104',
            address:'Sunakoti',
            proffession:"Electrian",
          // image:<Image src={carpenterProfile.image4} alt="noimage"/>,

            id:4
            },
            {
                name:"Sarjan Sabkholi",
                contact:'9843232104',
                address:'Sunakoti',
                proffession:"Electrian",
              // image:<Image src={imageTubeLight} alt="noimage"/>,

                id:5
                },
                {
                    name:"Sarjan Sabkholi",
                    contact:'9843232104',
                    address:'Sunakoti',
                    proffession:"Electrian",
                  // image:<Image src={imagehoder2} alt="noimage"/>,

                    id:6
                    },
                    {
                        name:"Sarjan Sabkholi",
                        contact:'9843232104',
                        address:'Sunakoti',
                        proffession:"Electrian",
                      // image:<Image src={imagemcbSimple} alt="noimage"/>,

                        id:7
                        },
                        {
                            name:"Sarjan Sabkholi",
                            contact:'9843232104',
                            address:'Sunakoti',
                            proffession:"Electrian",
                          // image:<Image src={imagemcb1} alt="noimage"/>,

                            id:8
                            },
]