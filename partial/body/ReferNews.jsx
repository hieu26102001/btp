import { ReferNews } from "../../elements/news";
import Image from "next/image"
import Refer from "../../component/Refer";

export default function ReferNew(){
    return(
        <Refer Refer={ReferNews} isTitle={true}/>
    )
}