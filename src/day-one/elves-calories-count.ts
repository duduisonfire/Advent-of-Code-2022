import fs = require('fs/promises');

class InputRead {
    private static file: Array<string> = [];
    private static elves: Array<number> = [];
    private static threeMostValuableElves: number[] = [];

    private static async readFile(filename: string): Promise<void>
    {
        const contents = await fs.readFile(filename, 'utf-8');
        this.file = contents.split(/\r?\n/);
    }

    private static async ElvesCount(): Promise<string[][]> {
        await this.readFile(`${__dirname}/input.txt`);
        let elf: string[] = [];
        let elves: Array<string[]> = [];

        for (let index = 0; index < this.file.length; index++) 
        {
            if (this.file[index] !== '') {
                elf.push(this.file[index]);
            } else if (this.file[index] === '') {
                elves.push(elf);
                elf = [];
            }
        }

        return elves;
    }

    private static async CalculateElvesCalories() {
        let elves = await this.ElvesCount();

        this.elves = elves.map(x => {
            let element: number = 0;
            for (let index = 0; index < x.length; index++) {
                element += Number(x[index]);
            }
            return element;
        });
    }

    private static async FindThreeMostValuableElves() {
        await this.CalculateElvesCalories();
        this.elves.sort((a,b) => a - b);

        this.threeMostValuableElves.push(this.elves[this.elves.length-1]);
        this.threeMostValuableElves.push(this.elves[this.elves.length-2]);
        this.threeMostValuableElves.push(this.elves[this.elves.length-3]);

        console.log(`The three most valuables elves: ${this.threeMostValuableElves}`);
    }

    private static FindMostValuableElf() {
        console.log(`The value of calories that the most valuable elf carries is: ${this.elves[this.elves.length-1]}.`);
    }

    public static async SumTheThreeMostValuablesElves() {
        await this.FindThreeMostValuableElves();

        let sum = this.threeMostValuableElves[0] + this.threeMostValuableElves[1] + this.threeMostValuableElves[2];

        this.FindMostValuableElf();
        console.log(`The sum of the calories that the three most valuable elves carry is: ${sum}.`)
    }
}

InputRead.SumTheThreeMostValuablesElves();