export class StringCalculator {
    add(numbers: string): number {
        if (numbers === "") return 0;

        const numArray = this.parseNumbers(numbers);
        const negatives = numArray.filter(n => n < 0);

        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return numArray.reduce((sum, num) => sum + num, 0);
    }

    private parseNumbers(input: string): number[] {
        let delimiter = /[,\n]/;
        if (input.startsWith("//")) {
            const parts = input.split("\n");
            delimiter = new RegExp(`[${parts[0].slice(2)}]`);
            input = parts[1];
        }
        return input.split(delimiter).map(num => parseInt(num, 10));
    }
}
