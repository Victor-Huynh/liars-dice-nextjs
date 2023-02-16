import { Bid } from './bid';

interface IPlayer {
    playerID: number;
    displayName: string;
    // displayPicture: ImageData; TODO
    currentBid: Bid;
    dice: number[];
    exposedDice: number;
    remainingDice: number;
}