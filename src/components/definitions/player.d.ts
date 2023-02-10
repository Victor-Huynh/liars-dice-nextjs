import Bid from './bid';

declare module 'playerM' {
    class PlayerI {
        playerID: number;
        displayName: string;
        remainingDice: number;
        currentBid: Bid;
        dice: Dice;
    }
    export = PlayerI;
}