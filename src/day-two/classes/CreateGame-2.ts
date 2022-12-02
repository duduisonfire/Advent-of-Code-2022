import { IOption } from "../interfaces/option";
import { Paper } from "./paper";
import { Rock } from "./rock";
import { Scissors } from "./scissors";

export class CreateGame2 {

    static createEnemy(string: string): IOption | undefined {
        switch(string) {
            case 'A': return new Rock();
            case 'B': return new Paper();
            case 'C': return new Scissors();
        }
    }

    static createPlayer(string: string, enemy: string): IOption | undefined {
        const compare = this.createEnemy(enemy) as IOption;

        switch(string) {
            case 'X': {
                if(compare.symbol === 'A'){
                    return new Scissors();
                }

                if(compare.symbol === 'B'){
                    return new Rock();
                }

                if(compare.symbol === 'C'){
                    return new Paper();
                }
            };
            case 'Y': return this.createEnemy(enemy);
            case 'Z': {
                    if(compare.symbol === 'A'){
                        return new Paper();
                    }
    
                    if(compare.symbol === 'B'){
                        return new Scissors();
                    }
    
                    if(compare.symbol === 'C'){
                        return new Rock();
                    }
            };
        }
    }
}   