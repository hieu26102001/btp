import { TopNew } from "../../../elements/news"

export default function RZone1(){
    return(
        <div>
            <div className="mt-5">
            <ul className=" col-span-5 pr-5">
                <a> 
                   <h2 className=" bg-white text-danger border-b-2 border-solid border-black">
                    <span class="bg-gray-700 ">ABC </span>
                    </h2>
                </a>
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        
                                        {
                                            i == 0 ?
                                            <li className="text-3xl">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={400} height={200}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="py-1 text-xl"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </>
                                )
                            })
                        } 
                    </ul>
            </div>
            <div className="mt-5">
            <ul className=" col-span-5 pr-5">
                <a> 
                    <h2 className=" bg-white text-danger border-b-2 border-solid border-black">
                    <span class="bg-gray-700 ">ABC </span>
                    </h2>
                </a>
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        
                                        {
                                            i == 0 ?
                                            <li className="text-3xl">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={400} height={200}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="py-1 text-xl"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </>
                                )
                            })
                        } 
                    </ul>
            </div>
            <div className="mt-5">
            <ul className=" col-span-5 pr-5">
                <a> 
                    <h2 className=" bg-white text-danger border-b-2 border-solid border-black">
                    <span class="bg-gray-700 ">ABC </span>
                    </h2>
                </a>
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        
                                        {
                                            i == 0 ?
                                            <li className="text-3xl">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={400} height={200}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="py-1 text-xl"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </>
                                )
                            })
                        } 
                    </ul>
            </div>
        </div>
    )
}