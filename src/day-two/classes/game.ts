import { IOption } from "../interfaces/option";

export class Game {
    player: IOption;
    enemy: IOption;

    constructor(player: IOption, enemy: IOption){
        this.player = player;
        this.enemy = enemy;
    }

    play(): number{
        
        if(this.player.symbol === this.enemy.symbol) {
            return 0;
        }

        if (this.enemy.symbol === 'A' && this.player.symbol === 'C') {
            return -1
        }

        if (this.enemy.symbol === 'B' && this.player.symbol === 'A') {
            return -1
        }

        if (this.enemy.symbol === 'C' && this.player.symbol === 'B') {
            return -1
        }

        return 1;
    }
}