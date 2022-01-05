import { Tin } from "../elements/Tintuc";
import { Left1 } from "../elements/body/Zone1News";
import Image from "next/image";
import RightTop from "./Title/Top/RightTop";
export default function Tintuc(){
    return(
        <div className="block">
            {Tin.map((item,i) => {return(
                <div className="font-normal">

                    <div className="font-bold text-4xl my-2 border-b-2">
                        {item.head}
                    </div>

                    <div className="font-semibold text-xl my-4">
                        {item.article}
                    </div>
                        
                        <Image src={item.images[0]} width={900} height={450} />

                    <div className="my-2">
                        {item.para.map((items) => 
                        <div className="my-2 ">{items}</div>
                        )}
                    </div>

                    <div className="flex justify-end font-bold text-xl">{item.author}</div>
                </div>
            )} )}
            <div className="my-4">
                <RightTop New={Left1} n={4} Active={true} />
            </div>
        </div>
    )
}