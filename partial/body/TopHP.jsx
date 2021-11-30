import { HeadNews, TopNew } from "../../elements/news"
import Image from "next/image"

export default function Top(){
    console.log(TopNew)
    return(
                <div className="row grid lg:grid-cols-8 ml-5">
                    <ul className=" col-span-5 pr-5">
                        
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i == 0 ?
                                            <li className="text-3xl">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={600} height={380}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="py-1"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </>
                                )
                            })
                        } 
                    </ul>
                    <ul className="w-300 bb-2 col-span-2 text-lg hidden lg:block"> 
                        {
                            TopNew.map(item => {return(
                                <li className="border-t-2 border-solid border-gray">
                                    <a href={item.link}>
                                            {item.article}
                                    </a>
                                </li>
                            )}
                        )}
                    </ul>
                </div>
    )
}