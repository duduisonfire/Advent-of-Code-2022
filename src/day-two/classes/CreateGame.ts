import { IOption } from "../interfaces/option";
import { Paper } from "./paper";
import { Rock } from "./rock";
import { Scissors } from "./scissors";

export class CreateGame {

    static createEnemy(string: string): IOption | undefined {
        switch(string) {
            case 'A': return new Rock();
            case 'B': return new Paper();
            case 'C': return new Scissors();
        }
    }

    static createPlayer(string: string): IOption | undefined {
        switch(string) {
            case 'X': return new Rock();
            case 'Y': return new Paper();
            case 'Z': return new Scissors();
        }
    }
}