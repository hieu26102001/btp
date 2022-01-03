import Image from 'next/image'
import Bgcard from '../Card/bgcard'
import ColCard from '../Card/ColCard'
import Rowcard from '../Card/RowCard'
export default function Title({Title , New, isActive, children}){

return(
<div className="bg-gray-light mt-10 mb-4" >
   <div className="flex text-lg content-end pt-2 border-t-8 border-solid border-gray border-b-2">
        <h4 className="px-3 text-2xl text-red-800 font-semibold">{Title}</h4>
    </div>
    
   <div className="block grid-cols-12 lg:grid  rounded-lg shadow-sm dark:bg-gray-800">
       {isActive?
      <div className="col-span-6 ">
         <div className="items-center p-2">
         {
                           New.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i == 0 ?
                                           <Bgcard item={item} hmd="h-96" h="h-60"/>:null
                                         
                                        }
                                    </>
                                )
                            })
                        } 
         </div>
      </div>:null }
      <div className={isActive? "flex col-span-6":"flex col-span-full"}>
         <section className="container px-2 py-2 mx-auto ">
            <div className="lg:grid gap-4 lg:grid-cols-2 ">
                        {
                           New.map((item, i) => {
                                return( 
                                    <>
                                       {
                                            i != 0 && i <= 4  ?
                                            <div >
                                                <div className="hidden lg:flex">
                                                    <ColCard item={item} w={300} h={150} />
                                                </div>
                                                <div className="lg:hidden my-2 flex">
                                                    <Rowcard item={item} w={150} h={80} ActiveImg={true}/>
                                                </div>
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