import { Multihead, Multinews } from "../../../elements/body/Multinews";
import { TopNew } from "../../../elements/news";
import Image from 'next/image'
export default function Hoahau(){

return(
<div className="bg-gray-light mt-10 text-roboto" >
   <div className="flex text-lg content-end">
        <h4 className="px-3 text-2xl text-red-800 font-semibold">HOA HAU</h4>
    </div>
   <div className="block grid-cols-8 lg:grid  rounded-lg shadow-sm dark:bg-gray-800">
      <div className="col-span-5 ">
         <div class="items-center p-4 ">
         {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i == 0 ?
                                            <div   style={{backgroundImage:`url(${item.images})` }} class="flex bg-cover bg-center overflow-visible  shadow-lg hover:shadow-2xl text-xl items-end  h-80 mb-5">
                                                <a  href={item.link} >
                                                    <div  class="text-primary text-lg font-bold text-end px-5">
                                                    <>{item.article}</> </div>
                                                </a>
                                            </div>:null
                                         
                                        }
                                    </>
                                )
                            })
                        } 
         </div>
      </div>
      <div className="flex col-span-3">
         {/* <!-- component --> */}
         <section class="container px-6 py-4 mx-auto ">
            <div class="grid gap-6 md:grid-cols-1 lg:grid-cols-2 ">
               {/* <!-- Card 1 --> */}
                        {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                       {
                                            i != 0 && i <= 4  ?
                                            <div className="font-semibold lg:flex lg:flex-wrap">
                                                <a  href={item.link} className="flex lg:block items-center justify-between">
                                                    <Image  src ={item.images} width={209} height={130}/>
                                                    <div className="ml-2">{item.article}</div>
                                                </a>
                                            </div>:null
                                        }
                                    </>
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