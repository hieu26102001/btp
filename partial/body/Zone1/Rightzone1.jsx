import { TopNew } from "../../../elements/news"

export default function RZone1(){
    return(
        <div>
            <div className="mt-5">
            <ul className=" col-span-5 pr-5 ">
                <a> 
                    <h2 className="flex bg-white text-primary text-bold border-b-2 border-solid border-black">
                    <span class="bg-gray-700 p-2 items-center "> ABC </span>
                    </h2>
                </a>
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <div className="bg-gray-light">
                                        
                                        {
                                            i == 0 ?
                                            <li className="text-2xl font-semibold pb-3 border-b-2 border-solid border-gray-400 px-2">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={400} height={200}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="border-b-2 border-solid border-gray-400 text-lg px-2"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </div>
                                )
                            })
                        } 
                    </ul>
            </div>
            <div className="mt-5">
            <ul className=" col-span-5 pr-5">
                <a> 
                    <h2 className="flex bg-white text-primary text-bold border-b-2 border-solid border-black">
                    <span class="bg-gray-700 p-2 items-center "> ABC </span>
                    </h2>
                </a>
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <div className="bg-gray-light ">
                                        
                                        {
                                            i == 0 ?
                                            <li className="text-2xl font-semibold border-b-2 border-solid border-gray-400 pb-3 px-2">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={400} height={200}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="border-b-2 border-solid border-gray-400 text-lg px-2"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </div>
                                )
                            })
                        } 
                    </ul>
            </div>
            <div className="mt-5">
            <ul className=" col-span-5 pr-5">
                <a> 
                    <h2 className="flex bg-white text-primary text-bold border-b-2 border-solid border-black">
                    <span class="bg-gray-700 p-2 items-center "> ABC </span>
                    </h2>
                </a>
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <div className="bg-gray-light">
                                        
                                        {
                                            i == 0 ?
                                            <li className="text-2xl font-semibold border-b-2 border-solid border-gray-400 pb-3 px-2" >
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={400} height={200}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </li>:<li className="border-b-2 border-solid  border-gray-400 px-2 text-lg"><a href={item.link}>{item.article}</a> </li>
                                        }
                                    </div>
                                )
                            })
                        } 
                    </ul>
            </div>
        </div>
    )
}