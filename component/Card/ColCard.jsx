import Link from 'next/link'
import Image from 'next/image'
export default function ColCard({item,w,h,ActivePara}){
    return(
        <div className="font-semibold justify-start flex lg:block items-center">
        <Link  href="/Tin" className="">
            <a>
            <Image  src ={item.images} width={w} height={h}/>
            <div className="">{item.article}</div>
            <div className={`${ActivePara?"":"hidden"} text-sm font-normal my-4`}>{item.para}</div>
            </a>
        </Link>
        </div>
    )
}