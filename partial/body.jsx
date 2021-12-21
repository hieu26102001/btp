import Multi from "./body/Multimedia"
import Refer from "./body/ReferNews"
import Top from "./body/TopHP"
import Zone1 from "./body/Zone1"
import Zone2 from "./body/Zone2"

export default function Body(){

    return(
        <div className="lg:grid grid-cols-12 container mt-1 mx-auto ">
        <div className="pl-8 col-start-1 col-span-12">
            <Top/>
            <Refer/>
            <Multi/>
            <Zone1/>
            <Zone2/>
        </div>
        </div>
    )
}