import { Multihead, Multinews } from "../../../elements/body/Multinews";
import { TopNew } from "../../../elements/news";
export default function Video(){
console.log(typeof Multinews)
return(
<div className="bg-gray-light mt-10" >
   <div className="flex text-lg content-end">
        <h4 className="px-3 text-2xl text-red-800 font-semibold">VIDEO</h4>
            {
                Multihead.map(item=> {return(
                <a class="px-3 font-semibold   hidden lg:block" href={item.link}>{item.title}</a>
                )})
            }
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
         <section class="container  mx-auto ">
            <div class="">
               {/* <!-- Card 1 --> */}
               {
                           TopNew.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i != 0 && i <= 4  ?
                                            <div className="text-xl mb-2 flex flex-wrap">
                                                <a  href={item.link} className="flex">
                                                    <img  src ={item.images}  layout="responsive" width={150} height={110}/>
                                                    <div >{item.article}</div>
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