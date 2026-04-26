function PrintObject(){
    let obj = {
        firstName: "Peater", LastName: "Parker", Age: 22
    }

    function fullname(obj){
        return (`${obj.firstName} ${obj.LastName}`);
    }

    return(
        <>
            <h1>Object to para</h1>
            <p>FullName: {fullname(obj)}</p>
            <p>Age: {obj.Age}</p>
        </>
    )
}

export default PrintObject