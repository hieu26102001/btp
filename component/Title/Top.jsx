
import Image from "next/image"
import Link from "next/link"
import ColCard from "../Card/ColCard"
import Rowcard from "../Card/RowCard"
import LeftTop from "./Top/LeftTop"
import RightTop from "./Top/RightTop"

export default function Top({ New, Active, n }) {
    return (
        <div className="grid grid-cols-12  mx-auto justify-center ">
            <div className="lg:col-span-6 col-span-12">
                <LeftTop New={New}/>
            </div>
            <div className="text-lg hidden lg:block mt-1 ml-4 lg:col-span-3">
                <RightTop New={New} n={n} Active={Active}/>
            </div>
        </div>
    )
}