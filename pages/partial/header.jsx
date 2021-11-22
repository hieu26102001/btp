import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { Logout } from 'heroicons-react'
import Date1 from '../utils/getDate';


export default function Header(){
    var today = new Date()
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var options = { weekday: 'long'};


    return(
        <div >
 
            <div className='flex justify-center'>
                <ul className='flex list-none mb-0 '>
                    <li className='px-5 text-xs'>TÒA SOẠN</li>
                    <li className='px-5 text-xs'>QUẢNG CÁO</li>
                    <li className='px-5 text-xs'>Hotline: 0865.015.015 - 0977.456.112</li>
                </ul>
                <div className='relate_site'>
                    <img></img>
                </div>
                <div className='flex'>
                    <a ><Image height={36} width={80} src='/Sinhvien.png'/></a>
                    <a ><Image height={36} width={80} src='/hoahoctro.png'/></a>
                    <a ><Image height={36} width={80} src='/tamviet.png' /></a>
                </div>
            </div>
            <div  >
                <div className='flex justify-around bg-red-700'>
                    <div className='logo'><img src='http://localhost:3000/Logo.png'/></div>
                    <div className='slick'></div>
                    <ul>
                        <li className="text-xs pb-2 pt-1">
                            {new Intl.DateTimeFormat('vi-VN', options).format(today)},
                           ngày &nbsp; {date} / {month} / {year}
                        </li>
                        <li><input type='text'></input></li>
                    </ul>
                </div>
            </div>
        </div>
 
    )}