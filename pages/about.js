import { useContext } from "react"
import userContext from "@/store/userContext"

function About() {
    const { qty } = useContext(userContext)
    const { SetQty } = useContext(userContext)

    function addProd(){
        SetQty(qty+1)
    }

    return (
        <div>
            <h1>THIS IS ABOUT US PAGE</h1>
            <h3>{qty}</h3>
             <button onClick={addProd}>Add one Product</button>
        </div>

    )
}

export default About