import Image from "next/image"
import { useState } from "react"
import Card from "../../../component/card"
import Title from "../../../component/title"
import { Left1, Left2, Left3 } from "../../../elements/body/Zone1News"
import { Menu2 } from "../../../elements/menu"
import RZone1 from "./Rightzone1"
export default function LeftZone1(){
    const [giaitri, setnews] = useState(Menu2.Giaitri.list)

        return(
        <div className="grid mx-auto px-2 col-span-6 mt-2">
                <Card New={Left1} />
            {/* <!-- component --> */}
               <Title Title="Giai tri" New={Left2} isActive={false} /> 
                <Card New={Left2} />
        </div>
        )
}