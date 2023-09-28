import { createContext, ReactElement, useContext, useReducer } from 'react'

import { randomCards } from './utils'

type Props = {
  children: ReactElement | ReactElement[]
}

export enum Status {
  playerMove,
  wrongAnswer,
  rightAnswer
}

type AppState = {
  cards: string[]
  status: Status
}

type Action = {
  type: 'select-card' | 'return-to-game' | 'start-new-game'
  data?: {
    card?: string
  }
}

type AppContextType = {
  state: AppState
  dispatch: (action: Action) => void
}

const initialState: AppState = {
  cards: randomCards(),
  status: Status.playerMove
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'select-card':
      return {
        ...state,
        status: action?.data?.card === 'trooper5' ? Status.rightAnswer : Status.wrongAnswer
      }
    case 'return-to-game':
      return {
        ...state,
        status: Status.playerMove
      }
    case 'start-new-game':
      return {
        ...state,
        cards: randomCards(),
        status: Status.playerMove
      }
    default:
      return state
  }
}

const AppContext = createContext<AppContextType>({ state: initialState, dispatch: () => {} })

export const AppStateProvider = ({ children }: Props): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const useAppState = () => useContext(AppContext)
