// function Properties(props){
//     return(
//         <>
//             <h1>Hello {props.name}</h1>
//             <p>Age: {props.age}</p>
//             <p>City: {props.city}</p>
//         </>
//     )
// }

// function Properties({name, age, city}){
//     return(
//         <>
//             <h1>Hello {name}</h1>
//             <p>Age: {age}</p>
//             <p>City: {city}</p>
//         </>
//     )
// }


// // if the props is an array
// function Properties({name="Guest", age, city, hobbies=[]}){

//     return(
//         <>
//             <h1>Hello {name}</h1>
//             <p>Age: {age}</p>
//             <p>City: {city}</p>
//             <ul>
//                 {
//                     hobbies.map((hobbies, index) => (
//                         <li key={index}>{hobbies}</li>
//                     ))
//                 }
//             </ul>
//         </>
//     )
// }



function Properties({name="Guest", age, city, obj={}}){

    function fullname(obj){
        return (`${obj.firstName} ${obj.lastName}`);
    }

    return(
        <>
            <h1>Hello {name}</h1>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Full name: {obj.firstName} {obj.lastName}</p>
        </>
    )
}

export default Properties