import Image from "next/image"
import { useState } from "react"
import { Left1, Left2, Left3 } from "../../../elements/body/Zone1News"
import { Menu2 } from "../../../elements/menu"
import RZone1 from "./Rightzone1"
export default function LeftZone1(){
    const [giaitri, setnews] = useState(Menu2.Giaitri.list)
    console.log(giaitri)
        return(
        <div className="grid grid-cols-4 mr-5">
        <div class="col-span-4">
            {/* <!-- component --> */}
                <section class="container px-5 py-4 mx-auto ">
                    <div class="grid gap-6 mb-8 md:grid-cols-1">
                        {/* <!-- Card 1 --> */}
                        {
                            Left1.map(item =>{
                                return(
                                <div>
                                    <a href={item.link}>
                                        <h3 class="text-3xl font-bold   ">{item.article}</h3>
                                        <div class="flex items-center ">
                                            <img layout="responsive" src={item.img} width={300} height={180}/>
                                            <p class="hidden ml-3 lg:inline">{item.para}</p>
                                        </div>
                                    </a>
                                </div>
                            )})
                        }
                    </div>
                </section>
            {/* <!-- component --> */}
                <section class="container px-6 py-4 bg-gray-light ">
                    <ul className="flex col-span-5 text-xl content-end mb-2">
                        <li className="px-3 text-2xl text-red-800 font-semibold">Giải trí</li>
                        {
                            giaitri.map(
                                item=> {
                                    return(
                                    <li class="px-3 font-semibold justify-end hidden lg:block">{item.items}</li>
                                        )
                                    }
                            )
                        }
                    </ul>
                    <div class="lg:grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2 ">
                        {/* <!-- Card 1 --> */}
                        {
                            Left2.map(
                                item => {
                                    return(
                                        <div >
                                        <a  href={item.link}>
                                            <img  src ={item.img}  layout="responsive" width="300" height="180" className="m-0"/>
                                            <div className="text-xl mt-2">{item.article}</div>
                                        </a>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </section>
            {/* <!-- component --> */}
                <section class="container px-6 py-4 mx-auto ">
                    <div class="grid gap-6 mb-8 md:grid-cols-1">
                        {/* <!-- Card 1 --> */}
                        {
                            Left3.map(
                                item => {
                                    return(
                                        <div>
                                        <a href={item.link}>
                                            <h3 class="text-3xl font-bold mb-2">{item.article}</h3>
                                            <div class="flex items-center ">
                                                <img class="w-45  border-2 border-gray-300" src={item.img} />
                                                <p class="hidden ml-3 lg:inline">{item.para}</p>
                                            </div>
                                        </a>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </section>
        </div>
        </div>
        )
}