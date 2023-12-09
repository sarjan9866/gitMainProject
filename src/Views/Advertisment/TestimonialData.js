
import imageTutorone from "assets/images/classes.jpg"
import imageTutortwo from "assets/images/socket.jpg"
import imageTutorThree from "assets/images/all type mcb.jpg"
import imageTutorFour from "assets/images/show light.jpg"
import imageTutorFive from "assets/images/holder2.jpg"
// import imageTutorSix from "assets/images/all wire.jpg"

import { Image } from "antd"


const TestimonalData = [
  {
    name: "classes",
    image:<Image src={imageTutorone} alt="not"  
    style={{
      height: "95px",
      width: "95px",
      borderRadius: "80%",
    }}/>,
    key: 1,
    rating: 5,
    blockquote:
     "sarjan is very nice person."
  },
  
  {
    name: "Sockets",
    image: <Image src={imageTutortwo} alt="not" 
     style={{
      height: "95px",
      width: "95px",
      borderRadius: "50%",
    }}/>,
    key: 2,
    rating: 5,
    blockquote:
      "All type of socket repair and 100 % problem solve, socket are below such as: Power socket,Socket board,switch board socket etc.",
  },
  {
    name: "MCB",
    image: <Image src={imageTutorThree} alt="not"
    style={{
      height: "95px",
      width: "95px",
      borderRadius: "50%",
    }} 
    />,
    key: 3,
    rating: 5,
    blockquote:
      "We solve all type of MCB fult, short circut,MCB instulled etc problem .",
  },
  {
    name: "Light type ",
    image: <Image src={imageTutorFour} alt="not" 
    style={{
      height: "95px",
      width: "95px",
      borderRadius: "50%",
    }}
    />,
    key: 4,
    rating: 5,
    blockquote:
      "I am very happy with my learning experience with tutor app. I have recommended the fast and reliable " +
      "service of this app to all my friends.",
  },
  {
    name: "Holder",
    image:<Image src={imageTutorFive} alt="not"  
    style={{
      height: "95px",
      width: "95px",
      borderRadius: "50%",
    }}/>,
    key: 5,
    rating: 5,
    blockquote:
      " all type of holder repair .",
  },
  // {
  //   name: "Wire ",
  //   image:<Image src={imageTutorSix} alt="not"  
  //   style={{
  //     height: "95px",
  //     width: "95px",
  //     borderRadius: "50%",
  //   }}/>,
  //   key: 6,
  //   rating: 5,
  //   blockquote:
  //     "all wire recheck here .",
  // },

]

export default TestimonalData


