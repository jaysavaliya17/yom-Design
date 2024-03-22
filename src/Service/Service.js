import Foot from "../Footer/Foot"
import Head from "../Head/Head"
import Sec5 from "../Sec5/Sec5"
import Service1 from "../Service1/Service1"
import Service2 from "../Service2/Service2"
const obj3=[
    {main:"TO KNOW ABOUT THIS THEME READ THIS",main2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut explicabo magni sapiente.",para:"Inventore at quia, vel in repellendus, cumque dolorem autem ad quidem mollitia porro blanditiis atque rerum debitis eveniet nostrum aliquam. Sint aperiam expedita sapiente amet officia quis perspiciatis adipisci, iure dolorem esse exercitationem!",img:require('../Sec5/img/1.jpg')}
]
const Service = (props) =>{
    return(
        <>
            <Head/>
            <Service2/>
            <Service1/>
            <Sec5 title3={obj3}/>
            <Foot/>
        </>
    )
}
export default Service