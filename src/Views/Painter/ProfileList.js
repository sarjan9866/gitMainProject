import React from 'react';
import { Image } from "antd"
import Profile from 'Profile';
import { commonPainterProfile } from 'Commonitem/CommonProfile/Painter';


const PainterProfile=()=>{
    return(
       <Profile data = {data} title = "Painter"/>
    )
}
export default PainterProfile;
const data=[
    {
name:"Kumar Kadel",
contact:'9843232104',
address:'Ktm',
profession:"Electrian",
image:<Image src={commonPainterProfile.image1} alt="noimage" className='image'/>,
id:1
},
{
    name:"Kumar Kadel",
    contact:'9843232104',
    address:'Ktm',
    profession:"Electrian",
  image:<Image src={commonPainterProfile.image2} alt="noimage"/>,

    id:2
    },
    {
        name:"Kumar Kadel",
        contact:'9843232104',
        address:'Ktm',
        profession:"Electrian",
      image:<Image src={commonPainterProfile.image3} alt="noimage"/>,

        id:3
        },
        {
            name:"Kumar Kadel",
            contact:'9843232104',
            address:'Ktm',
            profession:"Electrian",
          image:<Image src={commonPainterProfile.image4} alt="noimage"/>,

            id:4
            },
            {
                name:"Kumar Kadel",
                contact:'9843232104',
                address:'Ktm',
                profession:"Electrian",
              // image:<Image src={imageTubeLight} alt="noimage"/>,

                id:5
                },
                {
                    name:"Kumar Kadel",
                    contact:'9843232104',
                    address:'Ktm',
                    profession:"Electrian",
                  // image:<Image src={imagehoder2} alt="noimage"/>,

                    id:6
                    },
                    {
                        name:"Kumar Kadel",
                        contact:'9843232104',
                        address:'Ktm',
                        profession:"Electrian",
                      // image:<Image src={imagemcbSimple} alt="noimage"/>,

                        id:7
                        },
                        {
                            name:"Kumar Kadel",
                            contact:'9843232104',
                            address:'Ktm',
                            profession:"Electrian",
                          // image:<Image src={imagemcb1} alt="noimage"/>,

                            id:8
                            },
]