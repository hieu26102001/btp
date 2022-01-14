import Rowcard from "../../Card/RowCard"
export default function LeftNew({New,Active}){
    return(
        <div className={`${Active?"hidden":""} mt-2 px-4`}>
            {
                    New.map((item, i) => {
                        return (
                            <>
                                {
                                    i != 0 && i<=3 ?
                                    <div className="text-base font-normal list-item ">
                                    <Rowcard item={item} w={1200} h={800}/>   
                                    </div>
                                    : null
                                }
                            </>

                        )
                    })
                }   
        </div>
    )
}