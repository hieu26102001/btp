import Image from 'next/image'
import Link from 'next/link'
export default function News1({TopNew,title,children,Active}){
    return(
     
            <div className="mb-2">
                <Link href="/Muc"> 
                    <div>
                        <div className="flex bg-white text-primary text-bold ">
                            <span className="bg-gray-700 p-2 items-center "> {title} </span>
                        </div>
                    </div>
                </Link>
                <div className=" lg:col-span-5 w-full">
                
                        {
                           TopNew.map((item, i) => {if(i < 5 )
                               { return( 
                                    <>
                                        
                                        {
                                            i == 0 ?
                                            <div className="text-2xl font-bold border-t-2 border-solid py-1 border-black">
                                                <a  href={item.link}>
                                                    <Image  src ={item.images} width={400} height={200} className="py-1"/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </div>:null
                                        }
                                        {
                                            i !=0 && i<=4 ?
                                            <div className="text-2xl py-1 ">
                                                <a  href={item.link} className='flex text-lg '>
                                                    <div className={Active?"mr-2":"hidden"}>
                                                    <Image  src ={item.images} width={400} height={200} />
                                                    </div>
                                                    <div>{item.article}</div>
                                                </a>
                                            </div>:null
                                        }
                                    </>
                                )}
                            })
                        } 
                    </div>
            </div>
    )}