import React, {createContext} from "react"
const context = React.createContext();
const Sender= context.Provider;
const Receiver = context.Consumer;
export{Sender,Receiver}