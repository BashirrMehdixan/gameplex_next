'use client'
const GameDetail =  ({params}: any) => {
    console.log(params)
    return (
        <>
            {params.slug}
        </>
    )
}
export default GameDetail;
