import { ReferNews } from "../../elements/news";
import Image from "next/image"

export default function Refer(){
    return(

            <ul className="lg:grid lg:grid-cols-12 mt-5 ml-2 block"> 

                {ReferNews.map(item =>{return(
                    <li className=" col-span-3 pr-9 ">
                        <a href={item.link} className="lg:block content-center mb-5 lg:space-x-0 font-semibold ">
                           <div className="">
                            <img src={item.img} 
                            layout="responsive" 
                            width="300"
                            height="180" />
                          <p className="my-2">  {item.article} </p>
                          </div>
                        </a>
                    </li>
                )})}
            </ul>

    )
}