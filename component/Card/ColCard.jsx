import Link from 'next/link'
import Image from 'next/image'
export default function ColCard({item,w,h}){
    return(
        <div className="font-semibold hover:shadow-xl justify-start flex lg:block items-center">
        <Link  href="/Tin" className="">
            <div>
            <Image  src ={item.images} width={w} height={h}/>
            <div className="">{item.article}</div>
            </div>
        </Link>
        </div>
    )
}