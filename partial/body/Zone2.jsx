import Hoahau from "./Zone2/Hoahau";
import News1 from "./Zone2/News1";
import News2 from "./Zone2/News2";
import Video from "./Zone2/Video";

export default function Zone2(){
    return(
        <div class="mx-auto mt-10">
            <News1/>
            <Video/>
            <News2/>
            <Hoahau/>
        </div>
    )
}