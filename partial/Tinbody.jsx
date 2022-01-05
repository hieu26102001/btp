import Link from "next/link";
import News from "../component/Title/News";
import Comment from "../component/Comment";
import TitleName from "../component/Title/Titlename";
import { Left1 } from "../elements/body/Zone1News";
import Tintuc from "../component/Tintuc";
import { Tin } from "../elements/Tintuc";
import RightTop from "../component/Title/Top/RightTop";
import Tags from "../component/Tags";
export default function Tinbody() {
   return (
      <div className="mx-auto ">
         <div className="lg:grid grid-cols-12">
            <div className="col-span-12">
               <TitleName />
            </div>

            <div className="col-span-10">
               <div className="flex">
                  <div className="lg:w-3/4 mr-4">
                     <Tintuc />
                  </div>
                  <div className="lg:w-1/4 hidden lg:block text-sm  ">
                     <div className="border-2 border-gray p-2 mb-2 ">
                        <div className="border-b-4 border-red text-2xl mb-2">XEM NHIỀU</div>
                        <RightTop New={Left1} n={4} />
                     </div>
                     <div className="border-2 sticky top-12 border-gray p-2 ">
                        <div className="border-b-4 text-2xl border-gray mb-2">TIN LIÊN QUAN</div>
                        <RightTop New={Left1} n={4} Active={true} />
                     </div>
                  </div>
               </div>

               <div className=" mt-2">
                  <div className="flex bg-white text-bold border-t-4 py-2">
                     <span className=" items-center text-2xl"> MỚI - NÓNG </span>
                  </div>
                  <News n={3} New={Left1} />
               </div>
               <Tags />
               <Comment />
               <div>
                  <div className="flex bg-white text-primary text-bold border-b-4 mb-2 border-red">
                     <Link href="/Muc">
                        <span className="bg-red p-2 items-center text-xl "> CÓ THỂ BẠN QUAN TÂM </span>
                     </Link>
                  </div>
                  <News n={3} New={Left1} />
               </div>
            </div>

         </div>
      </div>
   )
}