import { createContext, useContext, useState } from "react";

const CounterValue = createContext(0);
// On déclares que c'est une fonction vide au préalable
const CounterSetter = createContext(()=>{});

export function GameProvider({children}){
    const [counter, setCounter] = useState(0);

    return (
        <CounterSetter.Provider value={setCounter}>
            <CounterValue.Provider value={counter}>
                {children}
            </CounterValue.Provider>
        </CounterSetter.Provider>
    )
}

export const useCounterValue = () => {
    return useContext(CounterValue);
}

export const  useCounterSetter = () => {
    return useContext(CounterSetter)
}