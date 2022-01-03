import Link from "next/link"
export default function TopCard({item,w,h}){
    return(
        <div>
            <Link  href={item.link} className="">
                <div>
                    <img  src ={item.images} width="full"/>
                <div className="">{item.article}</div>
            </div>
        </Link>
        </div>
    )
}