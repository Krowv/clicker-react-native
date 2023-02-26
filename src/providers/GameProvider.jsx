import {createContext, useContext, useEffect, useReducer} from "react";

const GameState = createContext(initialState);
const GameDispatch = createContext(() => null);

const initialState = {
    counter : 0,
    incomePerClick:1,
    costOfTheAugment: 10,
    autoClickerCost:15,
    autoClickerIncome:0,
}

export function GameProvider({children}){
  const [state, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "incrementCounter": {
        return {...state, counter: state.counter + state.incomePerClick}
      } 
      case "autoIncrement": {
        return {...state, counter: state.counter + state.autoClickerIncome}
      } 
      case "buyOne": {
        if (state.counter >= state.autoClickerCost)
          return {
            ...state, 
            counter: state.counter - state.autoClickerCost,
            autoClickerIncome: state.autoClickerIncome + 50,
            autoClickerCost: Math.round(state.autoClickerCost * 1.6)
          }
        return state;
      }
      case "addTwentyFiveStacks": {
        if (state.counter >= state.costOfTheAugment)
          return {
            ...state, 
            counter: state.counter - state.costOfTheAugment,
            costOfTheAugment: Math.round(state.costOfTheAugment * 2),
            incomePerClick: Math.round(state.incomePerClick * 1.5)
          }
        return state;
      }
    }
  }, initialState)

  // Au lancement de la page, un autoclicker se lance,
  useEffect(() => {
    const Interval = setInterval(() => {
      dispatch("autoIncrement")
    }, 1000)
    return () => {
      clearInterval(Interval);
    }
  }, [state.autoClickerIncome])

  return (
    <GameState.Provider value={state}>
      <GameDispatch.Provider value={dispatch}>
        {children}
      </GameDispatch.Provider>
    </GameState.Provider>
  )
}

export const useGameState = () => {
    return useContext(GameState);
}
export const useGameDispatch = () => {
    return useContext(GameDispatch)
}