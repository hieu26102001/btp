import { Multihead, Multinews } from "../../../elements/body/Multinews";
import { TopNew } from "../../../elements/news";
import Link from "next/link";
import Image from "next/image";
import VerSwiper from "../../../component/VerticalSwiper";
export default function Video() {

    return (
        <div className="bg-gray-dark mt-10" >
            <div className="flex text-lg text-primary items-end border-b-2 border-gray-400 border-solid mt-1">
                <h4 className="px-3 text-2xl text-primary font-semibold py-1">VIDEO</h4>
                {
                    Multihead.map(item => {
                        return (
                            <Link href="/Muc">
                                <a>
                                    <div className="px-3 font-semibold items-end hidden lg:flex mt-1 pb-1">
                                        {item.title}
                                    </div>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
            {/* <div className="block grid-cols-8 lg:grid  rounded-lg shadow-sm ">
                <div className="col-span-4 ">
                    <div className="items-center p-4  text-primary ">
                        {
                            TopNew.map((item, i) => {
                                return (
                                    <>
                                        {
                                            i == 0 ?
                                                <div className="text-3xl">
                                                    <Link href={item.link}>
                                                        <a>
                                                            <Image src={item.images} width={620} height={360} />
                                                            <h3 className="mt-2">{item.article}</h3>
                                                        </a>
                                                    </Link>
                                                </div> : null
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-span-4 py-4">
                    <section className="container mx-auto ">
                        <div className="text-primary ">
                            {
                                TopNew.map((item, i) => {
                                    return (
                                        <div>
                                            {
                                                i != 0 && i <= 4 ?
                                                    <div className="text-xl mb-2 flex flex-wrap px-4">
                                                        <Link href={item.link} >
                                                            <a className="flex items-center">
                                                                <Image src={item.images} width={135} height={80} />
                                                                <div className="px-2 w-3/5">{item.article}</div>
                                                            </a>
                                                        </Link>
                                                    </div> : null
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
                
            </div> */}
            <VerSwiper New={TopNew} />
        </div>
    )
}