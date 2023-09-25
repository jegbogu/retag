import { useState, useEffect } from "react";
function Timming(){

    const [count, setCount] = useState(0);
    const [sign, SetSign] =  useState('+')

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    },[sign])

    function signFnc(){
        SetSign('-')
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={signFnc}>{sign}</button>
        </div>
    )
}

export default Timming