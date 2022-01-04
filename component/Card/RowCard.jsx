import Link from "next/link"
import Image from "next/image"
export default function Rowcard({ item, w, h,ActivePara, ActiveImg,Active }) {
    return (
        <div className="pb-2 border-b-2 border-solid">
            <Link href="/Tin" >
                <div>
                    <div className={Active?"md:text-2xl mb-1 pb-1 font-semibold ":"hidden"}>
                        {item.article}
                    </div>
                    <div className="md:flex items-center gap-2">
                        <div className={ActiveImg?"md:flex hidden":"hidden"}>
                        <Image src={item.images} width={w} height={h} />
                        </div>
                        <div className={ActiveImg?"md:w-3/5":""}>
                        <div className={`${Active?"hidden":""} `}>
                            {item.article}
                        </div>
                        <div className="">
                            <div className={ActivePara?"font-normal text-justify md:flex hidden":"hidden"}>{item.para}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}