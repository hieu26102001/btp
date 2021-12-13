import { TopNew } from "../../../elements/news"

export default function News2(){
    return(
        <div className=" grid lg:grid-cols-3">
            <div className="mt-5">
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
                                            <div   style={{backgroundImage:`url(${item.images})` }} className="flex w-full bg-cover bg-center overflow-visible  shadow-lg hover:shadow-2xl text-xl items-end w-100 h-60 my-2 mb-5 ">
                                                <a  href={item.link} >
                                                    <div  className="text-primary text-xl font-bold text-end px-5">
                                                    <>{item.article}</> </div>
                                                </a>
                                            </div>
                                            :<li className="py-1 text-lg flex h-20 w-35 mb-5 ">
                                                <a href={item.link} className="flex">
                                                    <img  src ={item.images}  width="130" />
                                                <span  className="ml-2" > {item.article}</span>
                                                </a> 
                                            </li>
                                        }
                                    </>
                                )}
                            })
                        } 
                    </ul>
            </div>
            <div className="mt-5">
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
                                    <div   style={{backgroundImage:`url(${item.images})` }} className="flex w-full bg-cover bg-center overflow-visible  shadow-lg hover:shadow-2xl text-xl items-end w-100 h-60 my-2 mb-5">
                                        <a  href={item.link} >
                                            <div  className="text-primary text-xl font-bold text-end px-5">
                                            <>{item.article}</> </div>
                                        </a>
                                     </div>
                                    :<li className="py-1 text-lg flex h-20 w-35 mb-5">
                                        <a href={item.link} className="flex">
                                            <img  src ={item.images}  width="130" />
                                           <span  className="ml-2" > {item.article}</span>
                                        </a> 
                                    </li>
                                }
                            </>
                                )}
                            })
                        } 
                    </ul>
            </div>
            <div className="mt-5">
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
                                    <div   style={{backgroundImage:`url(${item.images})` }} className="flex w-full bg-cover bg-center overflow-visible  shadow-lg hover:shadow-2xl text-xl items-end w-100 h-60 my-2 mb-5">
                                        <a  href={item.link} >
                                            <div  className="text-primary text-xl font-bold text-end px-5">
                                            <>{item.article}</> </div>
                                        </a>
                                     </div>
                                    :<li className="py-1 text-lg flex h-20 w-35 mb-5">
                                        <a href={item.link} className="flex">
                                            <img  src ={item.images}  width="130" />
                                           <span  className="ml-2"> {item.article}</span>
                                        </a> 
                                    </li>
                                }
                            </>
                                )}
                            })
                        } 
                    </ul>
            </div>
        </div>
    )}