function FunEve()
{
    // function Event
    function handleClick(){
        alert("Event handle in react");
    }

    // arrowFunction Event
    const handelInput = (event) => {
        console.clear();
        console.log(event.target.value);
    }
    return(
        <>
            <button onClick={handleClick} > click me </button>
            <button onClick={() => alert("inline Event")}>show me</button> {/* inline event */}
            <br />
            <input type="text" onChange={handelInput}/>
        </>
    )
}

export default FunEve