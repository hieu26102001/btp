import LeftZone1 from "./Zone1/Leftzone1";
import RZone1 from "./Zone1/Rightzone1";


export default function Zone1(){
    return(
        <div className="lg:grid lg:grid-cols-12 mt-4 justify-between mx-auto gap-8">
        <LeftZone1 />
        <RZone1 />
        </div>
    )
}