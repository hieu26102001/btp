import Rowcard from "../../Card/RowCard";
export default function RightTop({ New, Active, n }){
    return(
        <>
        {
            New.map((item, i) => {
                return (
                    (i != 0 && i <= n ?
                        <div className="pb-4">
                        <Rowcard item={item} w={140} h={90} ActiveImg={Active}/>
                        </div>
                        : null)

                )
            }
            )}
        </>
    )

}