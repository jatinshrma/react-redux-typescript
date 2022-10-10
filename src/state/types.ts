export enum ActionType {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    BANKRUPT = "backrupt",
}

export type depositAction = {
    type: ActionType.DEPOSIT,
    payload: number
}

export type withdrawAction = {
    type: ActionType.WITHDRAW,
    payload: number
}

export type bankruptAction = {
    type: ActionType.BANKRUPT,
}

export type Action = depositAction | withdrawAction | bankruptAction;