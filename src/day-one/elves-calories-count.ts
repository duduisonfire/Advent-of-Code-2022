import fs = require('fs/promises');

class InputRead {
    private static file: Array<string> = [];
    private static elves: Array<string> = [];
    private static mostValuableElf: string;

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
            return `${element}`;
        });
    }

    public static async FindMostValuableElf() {
        await this.CalculateElvesCalories();

        this.mostValuableElf = this.elves[0];
        let next: string;

        for (let index = 1; index < this.elves.length; index++) {
            next = this.elves[index];

            if (Number(this.mostValuableElf) > Number(next)) {
                this.mostValuableElf = this.mostValuableElf ;
            } else {
                this.mostValuableElf = next;
            }
        }

        console.log(`The most valuable elf carries ${this.mostValuableElf} calories.`);
    }
}

InputRead.FindMostValuableElf();