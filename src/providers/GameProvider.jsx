import {createContext, useContext, useEffect, useState} from "react";
import {useAutoClickerIncomeValue} from "./GameAutoClickerProvider";
const CounterValue = createContext(0);
// On déclares que c'est une fonction vide au préalable
const CounterSetter = createContext(number=>{});
const ValueAdded = createContext(1);
const ValueAddedSetter = createContext(p => {})
export function GameProvider({children}){
    const [counter, setCounter] = useState(0);
    const [valueAdded, setValueToAdd] = useState(1);
    const autoClickerIncome = useAutoClickerIncomeValue();
    // Au lancement de la page, un autoclicker se lance,
    useEffect(() => {
        const Interval = setInterval(() => {
            setCounter((preValue) => {
                return preValue + autoClickerIncome;
            })
        }, 1000)
        return () => {
            clearInterval(Interval);
        }
    }, [autoClickerIncome])
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