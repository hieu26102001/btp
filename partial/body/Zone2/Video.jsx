import { Multihead, Multinews } from "../../../elements/body/Multinews";
import { TopNew } from "../../../elements/news";
import Link from "next/link";
export default function Video(){
    
return(
<div className="bg-gray-dark mt-10" >
   <div className="flex text-lg text-primary content-end border-b-2 border-gray-400 border-solid mt-1">
        <h4 className="px-3 text-2xl text-primary font-semibold py-1">VIDEO</h4>
            {
                Multihead.map(item=> {return(
                <Link className="px-3 font-semibold content-center hidden lg:flex mt-1 pb-1" href="/Muc">
                    <div>{item.title}</div>
                </Link>
                )})
            }
   </div>
   <div className="block grid-cols-8 lg:grid  rounded-lg shadow-sm ">
      <div className="col-span-4 ">
         <div className="items-center p-4  text-primary ">
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i == 0 ?
                                            <div className="text-3xl">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" />
                                                    <h3 className="mt-2">{item.article}</h3>
                                                </a>
                                            </div>:null
                                        }
                                    </>
                                )
                            })
                        } 
         </div>
      </div>
      <div className="col-span-4 py-4">
         <section className="container mx-auto ">
            <div className="text-primary ">
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <div>
                                        {
                                            i != 0 && i <= 4  ?
                                            <div className="text-xl mb-2 flex flex-wrap h-30 w-35 px-4">
                                                <a  href={item.link} className="flex justify-center items-center">
                                                    <img  src ={item.images} width="140" height="80"/>
                                                    <div  className="px-2">{item.article}</div>
                                                </a>
                                            </div>:null
                                        }
                                    </div>
                                )
                            })
                        } 
            </div>
         </section>
      </div>
   </div>
</div>
)
}