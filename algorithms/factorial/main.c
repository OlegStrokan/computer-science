#include <stdio.h>

int factorialRecursion(int n) {
  if (n <= 1) 
    return 1;
    else 
    return n * factorialRecursion(n - 1);
}

int factorialTailRecursion(int n, int accumulator) {
    if (n <= 1) 
        return accumulator;
    else 
        return factorialTailRecursion(n - 1, n* accumulator);
}


int factorialLoop(int n) {
    int acc = 1;
    for (int i = 1; i <= n; i++)
        acc *= i;
    return acc;
}

int main() {
    int number;

    printf("Enter a positive integer: ");
    scanf("%d", &number);

    if (number < 0) {
        printf("Factorial is not defined for negative numbers. \n");
    } else {
        printf("Factorial of %d is %d\n", number, factorialRecursion(number));
        printf("Factorial of %d is %d\n", number, factorialTailRecursion(number, 1));
        printf("Factorial of %d is %d\n", number, factorialLoop(number));
    }

    return 0;
}