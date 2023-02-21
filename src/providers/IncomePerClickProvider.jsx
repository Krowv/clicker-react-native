import { createContext, useContext, useState } from "react";
const IncomeAddedPerClick = createContext(1);
// On déclares que c'est une fonction vide au préalable
const IncomeAddedPerClickSetter = createContext(()=>{});
export function IncomePerClickProvider({children}){
    const [incomePerClick, setIncomePerClick] = useState(1);

    return (
        <IncomeAddedPerClickSetter.Provider value={setIncomePerClick}>
            <IncomeAddedPerClick.Provider value={incomePerClick}>
                {children}
            </IncomeAddedPerClick.Provider>
        </IncomeAddedPerClickSetter.Provider>
    )
}

export const useIncomeAddedPerClick = () => {
    return useContext(IncomeAddedPerClick);
}
export const  useIncomeAddedPerClickSetter = () => {
    return useContext(IncomeAddedPerClickSetter);
}