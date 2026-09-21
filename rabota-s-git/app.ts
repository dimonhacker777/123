export const divide = (a: number, b: number): number => {
    if (b === 0) throw new Error('Деление на 0');
    return a / b;
}