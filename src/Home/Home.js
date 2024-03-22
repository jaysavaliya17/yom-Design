import Foot from "../Footer/Foot"
import Head from "../Head/Head"
import Sec3 from "../Sec3/Sec3"
import Sec4 from "../Sec4/Sec4"
import Sec5 from "../Sec5/Sec5"
import Sec6 from "../Sec6/Sec6"
import Sec7 from "../Sec7/Sec7"
import Sec8 from "../Sec8/Sec8"
import Sec9 from "../Sec9/Sec9"
import Slider from "../Slider/Slider"
const obj=[
    {title:"STYLISH DESIGN",subtit:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.",icon:"<BsXCircleFill className='icon' />"},
    {title:"FULLY RESPONSIVE",subtit:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.",icon:"<BsXCircleFill className='icon' />"},
    {title:"RETINA READY",subtit:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.",icon:" <BsPlayCircleFill className='icon' />"}
  ]
  const obj2 = [
    { title: "OVER 3000 PEOPLE ALREADY DOWNLOADED YOM", sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quod voluptate consequuntur ad quasi, dolores obcaecati ex aliquid, dolor provident accusamus omnis dolorum ipsam. Voluptatem ipsum expedita, corporis facilis laborum asperiores nostrum! Amet porro numquam ratione temporibus quia dolorem sint lorem voluptates quasi mollitia.", btnprev: "learn more", btnnext: "read more" }
]
const obj3=[
    {main:"TO KNOW ABOUT THIS THEME READ THIS",main2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut explicabo magni sapiente.",para:"Inventore at quia, vel in repellendus, cumque dolorem autem ad quidem mollitia porro blanditiis atque rerum debitis eveniet nostrum aliquam. Sint aperiam expedita sapiente amet officia quis perspiciatis adipisci, iure dolorem esse exercitationem!",img:require('../Sec5/img/1.jpg')}
]

const Home = () =>{
    return(
        <>
           <Head/>
           <Slider/>
           <Sec3 title={obj}/>
           <Sec4 title2={obj2}/>
           <Sec5 title3={obj3}/>
           <Sec6/>
           <Sec7/>
           <Sec8/>
           <Sec9/>
           <Foot/>
           
        </>
    )
}
export default Home