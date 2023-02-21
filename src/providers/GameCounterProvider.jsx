import { createContext, useContext, useState } from "react";

const CounterValue = createContext(0);
const CostValue = createContext(10);
const CostSetter = createContext(() => {});
// On déclares que c'est une fonction vide au préalable
const CounterSetter = createContext(number=>{});
const ValueAdded = createContext(1);
const ValueAddedSetter = createContext(() => {})
export function GameCounterProvider({children}) {
    const [costOfTheAugment, setCostOfTheAugment] = useState(10);
    return (
        <CostSetter.Provider value={setCostOfTheAugment}>
            <CostValue.Provider value={costOfTheAugment}>
                {children}
            </CostValue.Provider>
        </CostSetter.Provider>
    )
}
export const useCostValue = () => {
    return useContext(CostValue);
}
export const useCostSetter = () => {
    return useContext(CostSetter)
}