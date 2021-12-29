
import Image from "next/image"

export default function Top({ New, Active, n }) {
    return (
        <div className="lg:grid lg:grid-cols-12 flex mx-auto justify-center ">
            <ul className="lg:col-span-6 ">

                {
                    New.map((item, i) => {
                        return (
                            <>
                                {
                                    i == 0 ?
                                        <li className="text-3xl ">
                                            <a href={item.link}>
                                                <Image src={item.images} width={600} height={380} />
                                                <h3 className="py-2">{item.article}</h3>
                                            </a>
                                        </li> : null
                                }
                            </>

                        )
                    })
                }
            </ul>
            <ul className="text-lg hidden lg:block mt-1 ml-2 lg:col-span-3">
                {
                    New.map((item, i) => {
                        return (
                            (i != 0 && i <= n ?
                                <li className="border-b-2 p-2 border-solid border-gray">
                                    <a href={item.link} className="flex ">
                                        <div className={Active ? "hidden" : ""}>
                                             <Image src={item.images} width={130} height={80} />
                                        </div>
                                        <div className="px-2">  {item.article}</div>
                                    </a>
                                </li> : null)

                        )
                    }
                    )}
            </ul>
        </div>
    )
}