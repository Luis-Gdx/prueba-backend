export class Mutation {
    public hasMutation = dna => {
        const arr = this.getDnaArr(dna);
        let mutation = null;
        mutation = this.inlineValidation(arr);
        console.log(mutation);
        if (mutation) {
            return true;
        }
        mutation = this.verticalValidation(arr);
        if (mutation) {
            return true;
        }
        mutation = this.diagonalValidation(arr);
        return mutation;
    }

    private getDnaArr = arr => {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            newArr.push(element.split(''));
        }
        return newArr;
    }

    private inlineValidation = dna => {
        for (let i = 0; i < dna.length; i++) {
            const element = dna[i];
            let prevL = null;
            let count = 0;
            for (let j = 0; j < element.length; j++) {
                const el = element[j];
                if (prevL === el) {
                    count++;
                } else {
                    count = 0;
                }
                console.log(count);
                if (count >= 3) {
                    return true;
                }
                prevL = el;
            }
        }
        return false;
    }

    private verticalValidation = dna => {
        for (let i = 0; i < dna.length; i++) {
            const element = dna[i];
            let prevL = null;
            let count = 0;
            for (let j = 0; j < element.length; j++) {
                const el = dna[j][i];
                if (prevL === el) {
                    count++;
                } else {
                    count = 0;
                }
                if (count >= 3) {
                    return true;
                }
                prevL = el;
            }
        }
        return false;
    }

    private diagonalValidation = dna => {
        for (let i = 0; i < dna.length; i++) {
            const element = dna[i];
            let prevL_1 = null;
            let count_1 = 0;
            let prevL_2 = null;
            let count_2 = 0;
            for (let j = 0; j < element.length; j++) {
                const el_1 = dna[j][j + i];
                const el_2 = dna[j][j - i];
                if (prevL_1 === el_1 && el_1 !== undefined) {
                    count_1++;
                } else {
                    count_1 = 0;
                }
                if (count_1 >= 3) {
                    return true;
                }
                prevL_1 = el_1;

                if (prevL_2 === el_2 && el_2 !== undefined) {
                    count_2++;
                } else {
                    count_2 = 0;
                }
                if (count_2 >= 3) {
                    return true;
                }
                prevL_2 = el_2;
            }
            prevL_1 = null;
            count_1 = 0;
            prevL_2 = null;
            count_2 = 0;
        }
        return false;
    }
}
