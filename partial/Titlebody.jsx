import { useRecoilValue } from "recoil";
import Refer from "../component/Refer";
import Top from "../component/Top";
import { MucMenu } from "../elements/menulist";
import { TopNew } from "../elements/news";
import Multi from "./body/Multimedia";
import Card from "../component/card";
import { Left1 } from "../elements/body/Zone1News";
export default function Titlebody(){
    const Muc = useRecoilValue(MucMenu)
    return(
        <div className="">
            <Top New={TopNew} Active={false} n={3}/>
            <Refer Refer={TopNew}/>
            <Multi/>
            <Card New={Left1} Row={true}/>
        </div>
    )
}