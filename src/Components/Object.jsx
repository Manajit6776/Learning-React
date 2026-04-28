function PrintObject(){
    let obj = {
        firstName: "Peater", lastName: "Parker", Age: 22
    }

    function fullname(obj){
        return (`${obj.firstName} ${obj.lastName}`);
    }

    return(
        <>
            <h1>Object to para</h1>
            <p>FullName: {fullname(obj)}</p> {/* <p>FullName: {obj.firstName} {obj.lastName}</p> */}
            <p>Age: {obj.Age}</p>
        </>
    )
}

export default PrintObject