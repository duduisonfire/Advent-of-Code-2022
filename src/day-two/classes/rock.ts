import { IOption } from "../interfaces/option";

export class Rock implements IOption {
    private _points: number = 1;
    private _symbol: string = 'A';


    get points() {
        return this._points;
    }

    get symbol() {
        return this._symbol;
    }

}