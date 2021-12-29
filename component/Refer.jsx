
import Image from "next/image"

export default function ReferNew({ Refer }) {
    return (

        <ul className="md:grid md:grid-cols-12 mt-5 block gap-x-3 ">

            {Refer.map((item, i) => {
                return (
                    i != 0 && i<=4?
                        <li className=" lg:col-span-3  md:col-span-6 items-center ">
                            <a href={item.link} className="md:block content-center mb-5 md:space-x-0 ">
                                <div className="flex md:block items-center justify-center">
                                    <Image src={item.images}
                                        width={300}
                                        height={180} />
                                    <p className="my-1 w-72 lg:w-auto px-2">  {item.article} </p>
                                </div>
                            </a>
                        </li>:null 
                )
            })}
        </ul>

    )
}