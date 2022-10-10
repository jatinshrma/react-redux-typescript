import * as Types from "./types"
import { Dispatch } from 'redux';
const { ActionType } = Types;

export const deposit = (amount: number) => (dispatch: Dispatch<Types.Action>) => {
    dispatch({
        type: ActionType.DEPOSIT,
        payload: amount
    })
}

export const withdraw = (amount: number) => (dispatch: Dispatch<Types.Action>) => {
    dispatch({
        type: ActionType.WITHDRAW,
        payload: amount
    })
}

export const bankrupt = () => (dispatch: Dispatch<Types.Action>) => {
    dispatch({
        type: ActionType.BANKRUPT
    })
}