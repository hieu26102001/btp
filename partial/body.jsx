import Multi from "./body/Multimedia"
import Refer from "./body/ReferNews"
import Top from "./body/TopHP"
import Zone1 from "./body/Zone1"
import Zone2 from "./body/Zone2"

export default function Body(){

    return(
        <div className="md:grid grid-cols-12 container mt-10">
        <div className="col-start-3 col-span-10">
            <Top/>
            <Refer/>
            <Multi/>
            <Zone1/>
            <Zone2/>
        </div>
        </div>
    )
}