import { useState } from "react"


// function Counter(){
//     const [count, setCount] = useState(0);

//     const increase = () =>{
//         setCount(count + 1);
//     }
//     const decrease = () =>{ 
//         if(count > 0) setCount(count - 1);
//     }

//     return (
//         <div>
//             <h1>useState</h1>
//             <h2>Count: {count>=1?count:"press increase"}</h2>
//             <button onClick={increase}>Increase</button>
//             <button onClick={decrease}>Decrease</button>
//         </div>
//     )
// }
// export default Counter

// function ToggleText(){

//     const [isVisible, setIsVisible] = useState(false);

//     return(
//         <>
//         {isVisible && <span>This is a Secret Message! </span>}
//         <button onClick={()=>{setIsVisible(!isVisible)}}>
//             {isVisible ? "Hide" : "Show"}
//         </button>
//         </>
//     )
// }
// export default ToggleText


// function Liked(){

//     const [Like, setLike] = useState(false);

//     return(
//         <>
//         <button onClick={()=>{setLike(!Like)}}>
//             {Like ? "❤️Liked" : "🤍Like"}
//         </button>
//         </>
//     )
// }
// export default Liked

function User(){
    const [user,setUser] = useState(
        {
            name: "Guest",
            age: null,
            city: ""
        }
    );

    return(
        <div>
            <p>Hello! {user.name} </p>
            <p>Your Age: {user.age}</p>
            <p>Your address: {user.city}</p>
        </div>
    )
}
export default User


