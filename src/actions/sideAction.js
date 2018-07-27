export const SIDE_ACTION_EXPAND = "SIDE_ACTION_EXPAND"

export function sideAction(status) {
    return {
        type: SIDE_ACTION_EXPAND,
        payload: status
    }
}
