import { HeadNews, TopNew } from "../../elements/news"
import Image from "next/image"

export default function Top(){
    console.log(TopNew)
    return(
                <div className="lg:grid lg:grid-cols-12 flex mx-auto px-3 justify-start">
                    <ul className="lg:col-span-6">
                        
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i == 0 ?
                                            <li className="text-3xl">
                                                <a href={item.link}>
                                                    <img src={item.images} layout="responsive" width="600" height="380"/>
                                                    <h3 className="py-2">{item.article}</h3>
                                                </a>
                                            </li>:null
                                        }
                                        <div className="px-3">{
                                            i != 0 && i < 5 ?
                                            <li className="text-base list-disc">
                                                <a href={item.link}>
                                                    <h3 className="py-2">{item.article}</h3>
                                                </a>
                                            </li>:null
                                        }
                                        </div>
                                    </>
                                    
                                )
                            })
                        } 
                    </ul>
                    <ul className="w-300 text-lg hidden lg:block mt-1 ml-2 lg:col-span-3"> 
                        {
                            TopNew.map(item => {return(
                                <li className="border-b-2 p-2 border-solid border-gray">
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