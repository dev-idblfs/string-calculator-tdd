class StringCalculator {
    private readonly defaultDelimiter: RegExp = /[\n,]/;

    add(numbers: string): number {
        if (!numbers) return 0;

        const { delimiter, numString } = this.extractDelimiter(numbers);
        const numArray = this.splitNumbers(numString, delimiter);
        this.checkForNegatives(numArray);

        return this.sumNumbers(numArray);
    }

    private extractDelimiter(numbers: string): { delimiter: RegExp; numString: string } {
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            const customDelimiter = parts[0].substring(2);
            return { delimiter: new RegExp(`[${customDelimiter}]`), numString: parts[1] };
        }
        return { delimiter: this.defaultDelimiter, numString: numbers };
    }

    private splitNumbers(numbers: string, delimiter: RegExp): number[] {
        return numbers.split(delimiter).map(num => parseInt(num, 10));
    }

    private checkForNegatives(numbers: number[]): void {
        const negatives = numbers.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }
    }

    private sumNumbers(numbers: number[]): number {
        return numbers.reduce((sum, current) => sum + (isNaN(current) ? 0 : current), 0);
    }
}

export default StringCalculator;
