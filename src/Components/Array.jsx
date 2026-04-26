function PrintArray(){

    let arr = ["IronMan","SpiderMan","Wolverin!", "DeadPool"];
    return(
        <>
            <h1>Array to List</h1>
            <ul>
                {
                    arr.map
                    ( (arr, index) => 
                        (
                            <li>{index + 1} - {arr}</li>
                        )
                    )
                }
            </ul>
        </>
    )
}



export default PrintArray