import Image from 'next/image'


export default function Header(){
    var today = new Date()
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var options = { weekday: 'long'};


    return(
        <div className="pt-5 lg:block hidden">
            <div className="flex h-14 justify-center">
                <div className='flex justify-end container'>
                    <ul className='flex list-none mb-0 mt-3 text-right text-gray '>
                        <li className='px-4'>TÒA SOẠN</li>
                        <li className='px-4'>QUẢNG CÁO</li>
                        <li className='px-4'>Hotline: 0865.015.015 - 0977.456.112</li>
                    </ul>

                    <div className='flex h-34'>
                        <a className="px-2">
                            <img height="34px" width="131px" src='/Sinhvien.png'/>
                        </a>
                        <a className='px-2 h-34'>
                            <img height="34px" width="57px"  src='/hoahoctro.png'/>
                        </a>
                        <a className='px-2'>
                            <img height="34px" width="97px" src='/tamviet.png' />
                        </a>
                    </div>
                    <div className='relate_site'>
                        <img></img>
                    </div>
                </div>
            </div>
                <div  >
                    <div className='flex h-20 bg-red justify-center'>
                        <div className="flex flex-wrap justify-between container ">
                            <div className='mt-2 flex-2'><img src='http://localhost:3000/Logo.png'/></div>
                            <div className='slick'></div>
                            <ul className="text-xs">
                                <li className="text-primary pb-2 pt-1">
                                    {new Intl.DateTimeFormat('vi-VN', options).format(today)},
                                ngày &nbsp; {date} / {month} / {year}
                                </li>
                                <li><input type='text'></input></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
 
    )}