import { IOption } from "../interfaces/option";

export class Scissors implements IOption {
    private _points: number = 3;
    private _symbol: string = 'C';

    get points() {
        return this._points;
    }

    get symbol() {
        return this._symbol;
    }     
}