import About_1 from "../About_1/About_1"
import About_2 from "../About_2/About_2"
import About_3 from "../About_3/About_3"
import Foot from "../Footer/Foot"
import Head from "../Head/Head"
import Sec4 from "../Sec4/Sec4"
import Sec7 from "../Sec7/Sec7"
const obj2 = [
    { title: "OVER 3000 PEOPLE ALREADY DOWNLOADED YOM", sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quod voluptate consequuntur ad quasi, dolores obcaecati ex aliquid, dolor provident accusamus omnis dolorum ipsam. Voluptatem ipsum expedita, corporis facilis laborum asperiores nostrum! Amet porro numquam ratione temporibus quia dolorem sint lorem voluptates quasi mollitia.", btnprev: "learn more", btnnext: "read more" }
]

const About = (props) =>{
    return(
        <>
            <Head/>
            <About_1/>
            <Sec4 title2={obj2}/>
            <Sec7/>
            <About_2/>
            <About_3/>
            <Foot/>
        </>
    )
}
export default About