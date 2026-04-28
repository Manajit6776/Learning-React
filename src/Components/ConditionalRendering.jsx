function ConditionalRendering(){

    let condition = true;

    // let message
    // if(condition){
    //     message = (<><h1>Welocome!</h1></>)
    // }
    // else
    // {
    //     message = (<><h1>Please Login!</h1></>)
    // }

    // return(
    //     message
    // )

    return(
        <div className="border-box">
            <h1>Conditional Rendering</h1>
            {condition ? (<><h1>Welcome</h1></>) : (<><h1>Please Login</h1></>)}
        </div> 
    )

}


export default ConditionalRendering