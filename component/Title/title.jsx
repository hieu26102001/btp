import Image from 'next/image'
import Link from 'next/link'
import Bgcard from '../Card/bgcard'
import ColCard from '../Card/ColCard'
import Rowcard from '../Card/RowCard'
import { Multihead } from '../../elements/body/Multinews'
export default function Title({Title , New, isActive, children}){

return(
<div className="bg-gray-light mt-10 mb-4" >
<div className="flex text-lg  content-end border-b-2 border-gray-400 border-t-4 border-solid mt-1">
        <h4 className="px-3 text-2xl  font-semibold py-1">{Title}</h4>
            {
                Multihead.map(item=> {return(
                    <div className="px-3 font-semibold items-end hidden lg:flex mt-1 pb-1">
                <Link  href="/Muc">
                    <div>{item.title}</div>
                </Link>
                </div>
                )})
            }
   </div>
   <div className="block grid-cols-12 lg:grid  rounded-lg shadow-sm dark:bg-gray-800">
       {isActive?
      <div className="col-span-6 ">
         <div className="items-center p-2 lg:grid grid-rows-1 text-2xl">
         {
                           New.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i == 0 ?
                                           <Bgcard item={item} w={750} h={500}/>
                                       
                                        :null
                                         
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
                                                    <ColCard item={item} w={300} h={140} />
                                                </div>
                                                <div className="lg:hidden my-2 flex">
                                                    <Rowcard item={item} w={200} h={120} ActiveImg={true}/>
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