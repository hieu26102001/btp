import { useRecoilValue } from "recoil";
import { Menulistclick, MucMenu } from "../../elements/menulist";
import { Menu2 } from "../../elements/menu";
import Link from "next/link";
import { useState } from "react/cjs/react.development";


export default function TitleName() {
    const menuli = useRecoilValue(Menulistclick)
    const Muc = useRecoilValue(MucMenu)
    const [id, setid] = useState()
    console.log(menuli)
    return (
        <div className="grid-cols-12 lg:grid">
            <div className="col-span-9">
                {Object.keys(Menu2).map((k) => {
                    return (
                        <div className="mt-4 " >
                            {Menu2[k].id == Muc.id ?
                                <div>
                                    <Link href="/Muc" >
                                        <div className="flex items-end border-b-4 border-gray-dark 
                                        md:overflow-hidden overflow-scroll ">
                                            <div className="uppercase text-xl w-max p-2 bg-gray-dark text-primary">
                                                {Menu2[k].title}
                                            </div>
                                            <div className="flex items-end font-normal text-xl">
                                                {Menu2[k].list.map((item, i) => {
                                                    return (
                                                        <div className={`${i == id ? "text-red" : ""} lg:border-r-0
                                                        p-2 w-max border-r-2 border-gray bg-white hover:text-red`}
                                                            onClick={() => setid(i)}>
                                                            {item.items}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </Link>
                                </div> : null}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}