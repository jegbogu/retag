import { createContext, useState } from "react";

const userContext = createContext({})

export function UserContextProvider(props){
const[qty,SetQty] = useState(0)

    return(
        <userContext.Provider value={{qty,SetQty}}>
            {props.children}
        </userContext.Provider>
    )
}


export default userContext