import ColCard from "../Card/ColCard"
import Rowcard from "../Card/RowCard"

export default function Title2({New,Title}){
    return(
        <div>
        <div className="flex text-lg content-end pt-2 border-t-8 border-solid border-gray border-b-2">
                <div className="px-3 text-xl text-red-800 font-semibold">{Title}</div>
            </div>
            
        <div className="block grid-cols-12 lg:grid shadow-sm dark:bg-gray py-2 gap-x-2">
           <div className='col-span-6'>
               {New.map((item,i)=>{
                   return(
                       <>
                       { i == 0 ?
                           <div className='py-2 text-2xl'>
                           <ColCard item={item} w={780} h={450}/>
                         </div>: null
                        }
                        </>
                   )
               })}
           </div>
           <div className='col-span-3'>
                {New.map((item,i)=>{
                   return(
                       <>
                       { i != 0 && i <=2 ?
                           <div className='py-2 '>
                               <div className="hidden lg:block">
                               <ColCard item={item} w={340} h={150}/>
                               </div>
                                <div className="lg:hidden block">
                                    <Rowcard item={item} w={150} h={90} ActiveImg={true}/>
                                </div>
                         </div>: null
                        }
                        </>
                   )
               })}
           </div>
           <div className='col-span-3'>
           {New.map((item,i)=>{
                   return(
                       <>
                       { i >= 3 && i<=6 ?
                           <div className='py-2'> 
                           <Rowcard item={item} w={150} h={90} ActiveImg={true}/>
                         </div>: null
                        }
                        </>
                   )
               })}
           </div>
        </div>
        </div>

    )
}