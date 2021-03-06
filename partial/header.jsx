import Image from 'next/image'
import Link from 'next/link'
import SwiperHead from "../component/SwiperHead";

export default function Header() {
    var today = new Date()
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var options = { weekday: 'long' };


    return (
        <div className="pt-5 lg:block hidden">
            <div className="flex justify-center">
                <div className='flex justify-end container'>
                    <div className='flex list-none mb-0 mt-3 text-right text-gray '>
                        <div className='px-4'>TÒA SOẠN</div>
                        <div className='px-4'>QUẢNG CÁO</div>
                        <div className='px-4'>Hotline: 0865.015.015 - 0977.456.112</div>
                    </div>

                    <div className='flex h-34'>
                        <div className="px-2">
                            <img height="34px" width="131px" src='/Sinhvien.png' />
                        </div>
                        <div className='px-2 h-34'>
                            <img height="34px" width="57px" src='/hoahoctro.png' />
                        </div>
                        <div className='px-2'>
                            <img height="34px" width="97px" src='/tamviet.png' />
                        </div>
                    </div>
                    <div className='relate_site'>
                        <img></img>
                    </div>
                </div>
            </div>
            <div  >
                <div className='flex bg-red justify-center'>
                    <div className="flex flex-wrap justify-center items-end container pb-2 font-normal mx-auto ">
                        <div className='mt-2 flex-2 w-1/5' >
                            <Link href="/"><img src='http://localhost:3000/Logo.png' /></Link>
                        </div>

                        <div className='text-primary  w-3/5'>
                            <SwiperHead />
                        </div>
                        <div className="text-sm items-start w-1/5 py-1">
                            <div className="text-primary pb-2 pt-1">
                                {new Intl.DateTimeFormat('vi-VN', options).format(today)},
                                ngày &nbsp; {date} / {month} / {year}
                            </div>
                            <div className=" mx-auto ">
                                <div className="flex rounded">
                                    <input type="text" className="px-4 py-2 h-8" placeholder="Search..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}