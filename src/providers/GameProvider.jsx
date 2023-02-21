import {createContext, useContext, useEffect, useState} from "react";
import {useAutoClickerIncomeValue} from "./GameAutoClickerProvider";
const CounterValue = createContext(0);
// On déclares que c'est une fonction vide au préalable
const CounterSetter = createContext(()=>{});
export function GameProvider({children}){
    const [counter, setCounter] = useState(0);
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