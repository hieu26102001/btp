import { Multihead, Multinews } from "../../../elements/body/Multinews";
import { TopNew } from "../../../elements/news";
export default function Hoahau(){
console.log(typeof Multinews)
return(
<div className="bg-gray-light mt-10" >
   <div className="flex text-lg content-end">
        <h4 className="px-3 text-2xl text-red-800 font-semibold">HOA HAU</h4>
    </div>
   <div className="block grid-cols-8 lg:grid  rounded-lg shadow-sm dark:bg-gray-800">
      <div className="col-span-4 ">
         <div class="items-center p-4 ">
         {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i == 0 ?
                                            <div className="text-3xl">
                                                <a  href={item.link}>
                                                    <img  src ={item.images}  layout="responsive" width={600} height={480}/>
                                                    <h3>{item.article}</h3>
                                                </a>
                                            </div>:null
                                        }
                                    </>
                                )
                            })
                        } 
         </div>
      </div>
      <div className="flex col-span-4">
         {/* <!-- component --> */}
         <section class="container px-6 py-4 mx-auto ">
            <div class="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2 ">
               {/* <!-- Card 1 --> */}
               {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i != 0 && i <= 4  ?
                                            <div   style={{backgroundImage:`url(${item.images})` }} class="flex h-64 bg-cover bg-center overflow-visible  shadow-lg hover:shadow-2xl text-xl items-end lg:h-48">
                                                <a  href={item.link} >
                                                    <div  class="text-primary text-xl font-bold text-end">
                                                    <>{item.article}</> </div>
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