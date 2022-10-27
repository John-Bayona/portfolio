import type { Options, Players } from '~g/tick-tack-toe'
type WinnerFunction = (checkNextPlayer: Players, state: Options[]) => boolean

const checkWinner: WinnerFunction = (checkNextPlayer, state) => {
    //State is behind so I check the other player
    let currentPlayer = checkNextPlayer === '○' ? '✕' : '○'
    //Winning conditions: 0 1 2, 3 4 5,  6 7 8 (3*i, 3*i+1, 3*i+2) (horizontal lines)
    //0 3 6, 1 4 7, 2 5 8 (i,i+3,i+6) (vertical lines)
    //0 5 8, 2 4 6 (diagonals)
    //(main diagonal: 3*(i+1)-i)
    //(secondary diagonal: i+(i+1)*(3-1))
    for (let i = 0; i < 3; i++) {
        if (
            state[3 * i] === currentPlayer && //		0 3 6
            state[1 + 3 * i] === currentPlayer && //	1 4 7
            state[2 + 3 * i] === currentPlayer // 		2 5 8
        ) {
            return true
        }
        if (
            state[i] === currentPlayer && // 		0 1 2
            state[i + 3] === currentPlayer && //	3 4 5
            state[i + 6] === currentPlayer //		6 7 8
        ) {
            return true
        }
        //There are only 2 diagonals and each has a formula so no need to check any more than once
        if (i === 0) {
            if (
                state[0] === currentPlayer &&
                state[4] === currentPlayer &&
                state[8] === currentPlayer
            ) {
                return true
            }
            if (
                state[2] === currentPlayer &&
                state[4] === currentPlayer &&
                state[6] === currentPlayer
            ) {
                return true
            }
        }
    }
    //The loop has finished checking if the player won, so
    return false
}
export default checkWinner
