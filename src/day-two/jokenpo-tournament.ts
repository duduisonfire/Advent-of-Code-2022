import fs = require('fs');
import { CreateGame } from './classes/CreateGame';
import { Game } from './classes/game';
import { Player } from './classes/player';
import { IOption } from './interfaces/option';

const igor = new Player();

const contents = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');
let file = contents.split(/\r?\n/);

for (let index = 0; index < file.length; index++) {
    let player: IOption = CreateGame.createPlayer(file[index].charAt(2)) as IOption;
    let enemy: IOption = CreateGame.createEnemy(file[index].charAt(0)) as IOption;

    igor.score += player.points;
    
    let game = new Game(player, enemy);
    switch(game.play()) {
        case 0: {
            igor.score += 3
        }; break;
        
        case 1: {
            igor.score += 6
        }; break;
        
        case -1: {
        }; break;
    }

    console.log(igor.score);
}

console.log(igor.score)
