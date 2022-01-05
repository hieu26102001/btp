import Image from "next/image"
import { useState } from "react"
import News from "../../../component/Title/News"
import Title from "../../../component/Title/title"
import { Left1, Left2, Left3 } from "../../../elements/body/Zone1News"
import { Menu2 } from "../../../elements/menu"
import RZone1 from "./Rightzone1"

export default function LeftZone1(){
   

        return(
        <div className="grid mx-auto col-span-6 mt-2">
                <News New={Left1} n={10} Active={true}/>
               <Title Title="Giai tri" New={Left1} isActive={false} /> 
                <News New={Left1} n={10} Active={true}/>
                
        </div>
        )
}