import { useState } from "react/cjs/react.development"
import Image from 'next/image'
import Link from "next/link"
import Rowcard from "../Card/RowCard"
export default function New({ New,n,Active }) {

    return (
        <div className="container mx-auto ">
            <div className="grid gap-2 mb-8 md:grid-cols-1">

                {
                    New.map((item, i) => {

                    return (
                        <div className="pb-2 mb-2">
                           { i < n ?
                           <Rowcard item={item} w={300} h={180} ActivePara={true} ActiveImg={true} Active={Active}/>
                           :null}
                        </div>
                        )
                    })
                }
            </div>
        </div>)
}
