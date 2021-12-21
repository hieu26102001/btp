import LeftZone1 from "./Zone1/Leftzone1";
import RZone1 from "./Zone1/Rightzone1";


export default function Zone1(){
    return(
        <div className="lg:grid lg:grid-cols-12 mt-10 justify-between mx-auto gap-12">
        <LeftZone1 className=""/>
        <RZone1 className=""/>
        </div>
    )
}