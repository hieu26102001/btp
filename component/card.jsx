import { useState } from "react/cjs/react.development"
import Image from 'next/Image'
export default function Card({New, Row}){

    return(
        <div className="container mx-auto ">
            <div className="grid gap-6 mb-8 md:grid-cols-1">
                {/* <!-- Card 1 --> */}
                {
                    New.map((item , i) =>{

                        return(
                        <div className="pb-2">
                            <a href={item.link} >
                                <div className={Row?"hidden":"lg:text-2xl font-semibold "}>
                                    {item.article}
                                </div>
                                <div className={"lg:flex hidden items-center gap-2"}>
                                    <Image  src={item.images} width={300} height={180}/>
                                    <div className="w-3/5">
                                        <div className={Row?"lg:text-2xl font-semibold ":"lg:text-2xl font-semibold hidden"}>{item.article}</div>
                                        <p className="font-normal text-justify ">{item.para}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )})
                }
            </div>
        </div>)}
