import Image from "next/image"
import { useState } from "react"
import { Left1, Left2, Left3 } from "../../../elements/body/Zone1News"
import { Menu2 } from "../../../elements/menu"
import RZone1 from "./Rightzone1"
export default function LeftZone1(){
    const [giaitri, setnews] = useState(Menu2.Giaitri.list)
    console.log(giaitri)
        return(
        <div className="grid grid-cols-4 mx-auto px-2">
        <div className="col-span-4">
            {/* <!-- component --> */}
                <section className="container px-5 py-4 mx-auto ">
                    <div className="grid gap-6 mb-8 md:grid-cols-1">
                        {/* <!-- Card 1 --> */}
                        {
                            Left1.map(item =>{
                                return(
                                <div>
                                    <a href={item.link}>
                                        <h3 className="lg:text-3xl lg:font-bold font-semibold">
                                            {item.article}
                                        </h3>
                                        <div className="lg:flex hidden items-center ">
                                            <img layout="responsive" src={item.img} width={300} height={180}/>
                                            <p >{item.para}</p>
                                        </div>
                                    </a>
                                </div>
                            )})
                        }
                    </div>
                </section>
            {/* <!-- component --> */}
                <section className="container border-t-8 border-solid border-gray py-4 bg-gray-light ">
                    <ul className="flex col-span-5 text-xl content-end mb-2 border-b-2 px-4 border-solid border-gray-400">
                        <li className="px-3 text-2xl text-red-800 font-semibold">Giải trí</li>
                        {
                            giaitri.map(
                                item=> {
                                    return(
                                    <li className="px-3 font-semibold justify-end hidden lg:block">{item.items}</li>
                                        )
                                    }
                            )
                        }
                    </ul>
                    <div className="lg:grid gap-6 mb-8 md:grid-cols-1 px-4 lg:grid-cols-2 ">
                        {/* <!-- Card 1 --> */}
                        {
                            Left2.map(
                                item => {
                                    return(
                                        <div className="mx-auto mb-2">
                                        <a  href={item.link}>
                                            <img  src ={item.img} width="300" height="180" className="object-cover w-full"/>
                                            <div className="text-xl mt-2 break-all">{item.article}</div>
                                        </a>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </section>
            {/* <!-- component --> */}
                <section className="container px-6 py-4 mx-auto ">
                    <div className="grid gap-6 mb-8 md:grid-cols-1">
                        {/* <!-- Card 1 --> */}
                        {
                            Left3.map(
                                item => {
                                    return(
                                        <div>
                                        <a href={item.link}>
                                            <h3 className="lg:text-3xl lg:font-bold font-semibold">{item.article}</h3>
                                            <div className="lg:flex hidden items-center ">
                                                <img className="w-45  border-2 border-gray-300" src={item.img} />
                                                <p className="">{item.para}</p>
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