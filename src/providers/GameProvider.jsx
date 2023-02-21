import { createContext, useContext, useState } from "react";

const CounterValue = createContext(0);
// On déclares que c'est une fonction vide au préalable
const CounterSetter = createContext(number=>{});

const ValueAdded = createContext(1);

const ValueAddedSetter = createContext(() => {})

export function GameProvider({children}){
    const [counter, setCounter] = useState(0);
    const [valueAdded, setValueToAdd] = useState(1);

    return (
        <ValueAddedSetter.Provider value={setValueToAdd}>
            <ValueAdded.Provider value={valueAdded}>
                <CounterSetter.Provider value={setCounter}>
                    <CounterValue.Provider value={counter}>
                        {children}
                    </CounterValue.Provider>
                </CounterSetter.Provider>
            </ValueAdded.Provider>
        </ValueAddedSetter.Provider>
        
        
    )
}

export const useCounterValue = () => {
    return useContext(CounterValue);
}

export const  useCounterSetter = () => {
    return useContext(CounterSetter)
}

export const useValueToAdd = () => {
    return useContext(ValueAdded)
}

export const useValueToAddSetter = () => {
    return useContext(ValueAddedSetter)
}