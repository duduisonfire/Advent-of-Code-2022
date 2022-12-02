import { IOption } from "../interfaces/option";

export class Paper implements IOption {
    private _points: number = 2;
    private _symbol: string = 'B';

    get points() {
        return this._points;
    }

    get symbol() {
        return this._symbol;
    }

      
}