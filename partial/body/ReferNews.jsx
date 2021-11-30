import { ReferNews } from "../../elements/news";
import Image from "next/image"

export default function Refer(){
    return(

            <ul className="lg:grid lg:grid-cols-8 mt-5 ml-5 block"> 

                {ReferNews.map(item =>{return(
                    <li className=" col-span-2 pr-9">
                        <a href={item.link} className="flex lg:block items-center mb-5 space-x-3 lg:space-x-0">
                            <img src={item.img} 
                            layout="responsive" 
                            width={300}
                            height={180} />
                          <p>  {item.article} </p>
                        </a>
                    </li>
                )})}
            </ul>

    )
}