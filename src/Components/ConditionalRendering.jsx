function ConditionalRendering(){

    let condition = false;

    // if(false){
    //     return <><h1>Manajit</h1></>
    // }
    // else
    // {
    //     return <><h1>Mondal</h1></>
    // }

    return(
        <>
            condition ? <h1>Welcome</h1> <h1>Please Login</h1>
        </> 
    )

}


export default ConditionalRendering