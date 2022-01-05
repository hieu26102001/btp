import Link from 'next/link'
import Image from 'next/image'
export default function Bgcard({item,w,h}) {
    return (
        <Link href={item.link} >
            <a className='relative text-primary'>
                <Image src={item.images} width={w} height={h}/>
                <div className='absolute bottom-2 left-1'>{item.article}</div>
            </a>
        </Link>
    )
}   