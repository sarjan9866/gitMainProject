import { Image} from 'antd';
import React from 'react';
import Profile from 'Profile';
import { partTimeProfile } from 'Commonitem/CommonProfile/Manpower';

const PartTimeProfileList=()=>{
    return(
       
     <Profile data={data} title = "PartTime"/>

    )
}
export default PartTimeProfileList;

const data=[
    {
name:"Sarjan Sabkholi",
contact:'9843232104',
address:'Sunakoti',
proffession:"Electrian",
experience: "2 years",
image:<Image src={partTimeProfile.partTime1} alt="noimage" className='image'/>,
id:1
},
{
    name:"Sarjan Sabkholi",
    contact:'9843232104',
    address:'Sunakoti',
    proffession:"Electrian",
  image:<Image src={partTimeProfile.partTime2} alt="noimage"/>,

    id:2
    },
    {
        name:"Sarjan Sabkholi",
        contact:'9866801809',
        address:'Sunakoti',
        proffession:"Electrian",
      image:<Image src={partTimeProfile.partTime3} alt="noimage"/>,

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