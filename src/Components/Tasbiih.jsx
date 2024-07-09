import { useState } from "react"

 

function Tasbiih(){

const [tiro, setTiro] = useState(0)


// handle increment
const handleIncrement = () => {
    
        setTiro(tiro +1)

        if(tiro === 10){
            document.body.style.backgroundColor = "red"
        }
        else if (tiro === 20){
            document.body.style.backgroundColor = "gray"
        }
        else if (tiro === 30){
            document.body.style.backgroundColor = "orange"

        }
        else{
            document.body.style.backgroundColor = "white"

        }
        
}

const handleDecrement = () =>{

    if(tiro >0){
        setTiro(tiro -1)
    }
   
}

const handleRest =()=>{
    setTiro(0)
}




    return <div className="text-center mt-32">
<h1 className="text-9xl mb-10"> {tiro} </h1>
 
    <button onClick={handleDecrement} className="bg-orange-500  rounded px-2 py-2 text-3xl text-white mr-3">Decrementt</button>
    <button onClick={handleIncrement} className="bg-orange-500  rounded  px-2 py-2 text-3xl text-white mr-3  ">Increment</button>
    <button onClick={handleRest} className="bg-orange-500  px-2 rounded  py-2 text-3xl text-white mt-3 sm:mt-0  mr-3">Rest</button>
 

    </div>
}


export default Tasbiih