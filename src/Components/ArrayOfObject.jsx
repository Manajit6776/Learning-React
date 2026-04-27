function PrintArrayOfObject(){

    let arrobj = [
        {firstname: "Tony", lastname: "Stark", age: 32},
        {firstname: "Clark", lastname: "Kent", age: 30},
        {firstname: "Shang", lastname: "Chi", age: 26},
    ];

    function fullname(arrobj){
        return `${arrobj.firstname} ${arrobj.lastname}`
    }
    return(
        <>
            <h1>ArrayOfObject to para</h1>
            <div>
                {
                    // this is .map which we use to access array value after create a copy of the array
                    arrobj.map((arrobj, index) => (
                        <p>{fullname(arrobj)} is {arrobj.age} years old</p>
                    ))
                }
            </div>
        </>
    )
}

export default PrintArrayOfObject