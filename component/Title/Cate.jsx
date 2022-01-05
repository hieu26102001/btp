import Image from 'next/image'
import Link from 'next/link'
import Bgcard from '../Card/bgcard'
import ColCard from '../Card/ColCard'
import Rowcard from '../Card/RowCard'
export default function Cate({ New, title, Active }) {
    return (

        <div className="mb-2">
            <Link href="/Muc">
                <div>
                    <div className="flex bg-white text-primary text-bold border-b-2 border-gray mb-2">
                        <span className="bg-gray-700 p-2 items-center "> {title} </span>
                    </div>
                </div>
            </Link>
            <div className="">

                {
                    New.map((item, i) => {
                        if (i < 5) {
                            return (
                                <>

                                    {
                                        i == 0 ?
                                            <div className='text-xl font-bold mb-2'>
                                                <Bgcard item={item} w={600} h={400} />
                                            </div>
                                            : null
                                    }
                                    {
                                        i != 0 && i <= 4 ?
                                            <div>
                                                <Rowcard item={item} w={200} h={100} ActiveImg={Active} />
                                            </div>
                                            : null
                                    }
                                </>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}