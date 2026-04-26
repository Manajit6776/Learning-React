// import './App.css'

function Hello(){

    const getName = (n) => {
        return n;
    }

    const name = "Manajit";

    return(
        <>
            <h1 className="text1">Hello {getName(name)}</h1>
        </>
    )
}

export default Hello