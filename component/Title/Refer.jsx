
import Image from "next/image"
import ColCard from "../Card/ColCard"
export default function ReferNew({ Refer }) {
    return (

        <div className="md:grid md:grid-cols-12  mt-5 block gap-x-3 ">

            {Refer.map((item, i) => {
                return (
                     i < 4?
                        <div className=" lg:col-span-3 md:col-span-6  ">
                            <ColCard item={item} w={500} h={240}/>  
                        </div>:null 
                )
            })}
        </div>

    )
}