//Склонение слов в зависимости от числа
export const declOfNum = (number: number, textForms: string[]) => {
    number = Math.abs(number) % 100
    const n1 = number % 10
    if (number > 10 && number < 20) {
        return textForms[2]
    }
    if (n1 > 1 && n1 < 5) {
        return textForms[1]
    }
    if (n1 == 1) {
        return textForms[0]
    }
    return textForms[2]
}
