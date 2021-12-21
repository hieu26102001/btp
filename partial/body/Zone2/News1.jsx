import { TopNew } from "../../../elements/news"

export default function News1(){
    return(
        <div className=" grid lg:grid-cols-3 grid-cols-1 mt-2">
            <div className="">
            <ul className=" lg:col-span-5 pr-5">
                <a> 
                   <h2 className="flex bg-white text-primary text-bold ">
                    <span className="bg-gray-700 p-2 items-center "> ABC </span>
                    </h2>
                </a>
                        {
                           TopNew.map((item, i) => {if(i < 5 )
                               { return( 
                                    <>
                                        
                                        {
                                            i == 0 ?
                                            <li className="text-2xl font-bold border-t-2 border-solid  border-black">
                                                <a  href={item.link}>
                                                    <img  src ={item.images} width="400" height="200"/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="py-1 text-lg px-2"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </>
                                )}
                            })
                        } 
                    </ul>
            </div>
            <div className="">
            <ul className=" col-span-5 pr-5">
                <a> 
                    <h2 className="flex bg-white text-primary text-bold border-b-2 border-solid border-black">
                    <span className="bg-gray-700 p-2 items-center "> ABC </span>
                    </h2>
                </a>
                        {
                           TopNew.map((item, i) => {if(i < 5 )
                               { return( 
                                    <>
                                        
                                        {
                                            i == 0 ?
                                            <li className="text-2xl font-bold">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={400} height={200}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="py-1 text-lg px-2"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </>
                                )}
                            })
                        } 
                    </ul>
            </div>
            <div className="">
            <ul className=" col-span-5 pr-5">
                <a> 
                     <h2 className="flex bg-white text-primary text-bold border-b-2 border-solid border-black">
                    <span className="bg-gray-700 p-2 items-center "> ABC </span>
                    </h2>   
                </a>
                        {
                           TopNew.map((item, i) => {if(i < 5 )
                               { return( 
                                    <>
                                        
                                        {
                                            i == 0 ?
                                            <li className="text-2xl font-bold">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={400} height={200}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="py-1 text-lg px-2"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </>
                                )}
                            })
                        } 
                    </ul>
            </div>
        </div>
    )}