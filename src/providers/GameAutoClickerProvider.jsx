import React, {createContext, useContext, useEffect, useState} from "react";
import {useCounterValue, useCounterSetter} from "./GameProvider";
//Le prix de l'auto-clicker
const AutoClickerCostValue = createContext(undefined, undefined);
const AutoClickerCostSetter = createContext(undefined, undefined);
//La value de l'auto-clicker
const AutoClickerIncomeValue = createContext(undefined, undefined);
const AutoClickerIncomeSetter = createContext(undefined, undefined);
//L'achat d'un auto-clicker
const BoughtOne = createContext(undefined, undefined);
export function GameAutoClickerProvider({children}) {
    const [cost, setCost] = useState(15);
    const [addIncome, setAddIncome] = useState(0);
    return (
        <AutoClickerCostSetter.Provider value={setCost}>
            <AutoClickerCostValue.Provider value={cost}>
                <AutoClickerIncomeSetter.Provider value={setAddIncome}>
                    <AutoClickerIncomeValue.Provider value={addIncome}>
                        {children}
                    </AutoClickerIncomeValue.Provider>
                </AutoClickerIncomeSetter.Provider>
            </AutoClickerCostValue.Provider>
        </AutoClickerCostSetter.Provider>
    )
}
export const useAutoClickerIncomeValue = () => {
    return useContext(AutoClickerIncomeValue);
}
export const useAutoClickerIncomeSetter = () => {
    return useContext(AutoClickerIncomeSetter)
}
export const useAutoClickerCostValue = () => {
    return useContext(AutoClickerCostValue)
}
export const useAutoClickerCostSetter = () => {
    return useContext(AutoClickerCostSetter)
}