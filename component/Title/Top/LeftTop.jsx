import ColCard from "../../Card/ColCard"
export default function LeftTop({New}){
    return(
        <>
            {
                    New.map((item, i) => {
                        return (
                            <>
                                {
                                    i == 0 ?
                                    <div className="text-3xl">
                                    <ColCard item={item} w={1200} h={800}/>   
                                    </div>
                                    : null
                                }
                            </>

                        )
                    })
                }   
        </>
    )
}