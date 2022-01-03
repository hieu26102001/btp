import { Multihead, Multinews } from "../../elements/body/Multinews";
import { TopNew } from "../../elements/news";
import Image from 'next/image'
import Title from "../../component/Title/title";
export default function Multi(){

return(
    <Title Title="Multimedia" New={TopNew} isActive={true}/>
)
}