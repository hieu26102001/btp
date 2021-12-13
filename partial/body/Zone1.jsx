import LeftZone1 from "./Zone1/Leftzone1";
import RZone1 from "./Zone1/Rightzone1";


export default function Zone1(){
    return(
        <div className="lg:flex mt-10 justify-between mx-auto">
        <LeftZone1/>
        <RZone1/>
        </div>
    )
}