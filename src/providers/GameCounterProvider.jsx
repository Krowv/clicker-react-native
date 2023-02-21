import { createContext, useContext, useState } from "react";
const CostValue = createContext(10);
const CostSetter = createContext(() => {});
export function GameCounterProvider({children}){
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