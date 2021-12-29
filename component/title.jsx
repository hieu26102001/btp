import Image from 'next/image'
export default function Title({Title , New, isActive, children}){

return(
<div className="bg-gray-light mt-10 mb-4" >
   <div className="flex text-lg content-end pt-2 border-t-8 border-solid border-gray border-b-2">
        <h4 className="px-3 text-2xl text-red-800 font-semibold">{Title}</h4>
    </div>
    
   <div className="block grid-cols-12 lg:grid  rounded-lg shadow-sm dark:bg-gray-800">
       {isActive?
      <div className="col-span-6 ">
         <div className="items-center p-4">
         {
                           New.map((item, i) => {
                                return( 
                                    <>
                                        {
                                            i == 0 ?
                                            <div   style={{backgroundImage:`url(${item.images})` }} className="flex bg-cover  overflow-visible  shadow-lg hover:shadow-2xl text-xl items-end md:h-96 h-60 mb-5 bg-center">
                                                <a  href={item.link} >
                                                    <div  className="text-primary text-2xl font-bold text-end px-2">
                                                    <>{item.article}</> </div>
                                                </a>
                                            </div>:null
                                         
                                        }
                                    </>
                                )
                            })
                        } 
         </div>
      </div>:null }
      <div className={isActive? "flex col-span-6":"flex col-span-full"}>
         {/* <!-- component --> */}
         <section className="container px-6 py-4 mx-auto ">
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 ">
               {/* <!-- Card 1 --> */}
                        {
                           New.map((item, i) => {
                                return( 
                                    <>
                                       {
                                            i != 0 && i <= 4  ?
                                            <div className="font-semibold hover:shadow-2xl justify-center ">
                                                <a  href={item.link} className="flex lg:block items-center">
                                                    <Image  src ={item.images} width={300} height={150}/>
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