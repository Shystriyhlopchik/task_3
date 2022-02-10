export const If = (num: number,  val: string) => {
    const resultValue = Number(getValue(val));
    const minimumNumberSystem = getMinNumSys(val);


    let resultCalc = 0;
    let systemValue = 0;
    for (let i = minimumNumberSystem; resultCalc !== resultValue ; i++) {
        resultCalc = calcResult(i, resultValue);
        systemValue = i-1;
    }

    return new Test(systemValue)
}

class Test {
    constructor(systemValue: number) {
        this.basis = systemValue;
    }
    basis = 0;

    then(val: number) {
        return calcResult(this.basis, val)
    }
}

/** Поиск мминимально допустимой СС **/
function getMinNumSys(value: string): number {
    const arrSymbol: Array<string> = getValue(value).split("");

    let maxVal: string = arrSymbol[0];

    /* Поиск максимального числа в val*/
    arrSymbol.forEach((item) => {
        if (item > maxVal) {
            maxVal = item;
        }
    });
    /* Искомая СС > maxVal */
    return +maxVal + 1;
}

/** Перевод 10СС в basis **/
function calcResult(basis: number, num: number): number {
    let res = '';

    for (let i=0; num >= basis; i++){
        if (num === basis) {
            res = '10' + res;
            break;
        } else {
            if (num % basis > 9) {
                res = String.fromCharCode(65 + (num % basis)-10) + res;
            } else {
                res = '' + num % basis;
            }
        }
        num = Math.floor(num / basis);
        if (num < basis) {
            res = num + res;
        }
    }
    return +res;
}

function getValue(value: string) {
    return value.slice(2);
}
