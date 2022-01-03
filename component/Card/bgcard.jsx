import Link from 'next/link'
export default function Bgcard({item,hmd,h}) {
    return (
        <div style={{ backgroundImage: `url(${item.images})` }} className={`md:${hmd} ${h} flex bg-cover  overflow-visible  shadow-lg hover:shadow-2xl text-xl items-end mb-5 bg-center `}>
            <a href={item.link} >
                <div className="text-primary text-2xl font-bold text-end px-2">
                    <>{item.article}</> </div>
            </a>
        </div>
    )
}   