# Voting Eligibility and Loop Programs in C/C++

This document includes various C/C++ programs for checking eligibility and working with loops. These programs are written in a structured format for better understanding and readability.

---

## 1. Check Voting Eligibility in India

### Requirements for Voting:
1. Nationality: Indian
2. Age: >= 18

### Program: Simple If-Else
```c
#include <stdio.h>
#include <conio.h>

void main() {
    char nat;  
    int age; 

    clrscr();
    printf("Enter your nationality:\n i - for Indian \n o - for Other\n");
    scanf("%c", &nat);

    printf("Enter your age: ");
    scanf("%d", &age);

    if (nat == 'i' && age >= 18) {
        printf("Welcome to the Indian election system!");
    } else {
        printf("You are not eligible!");
    }

    getch();
}
```

### Program: Nested If-Else
```c
#include <stdio.h>
#include <conio.h>

void main() {
    char nat;  
    int age; 

    clrscr();
    printf("Enter your nationality:\n i - for Indian \n o - for Other\n");
    scanf("%c", &nat);

    printf("Enter your age: ");
    scanf("%d", &age);

    if (nat == 'i') {
        if (age >= 18) {
            printf("Welcome to the Indian election system!");
        } else {
            printf("You are under age");
        }
    } else {
        printf("You are not eligible!");
    }

    getch();
}
```

---

## 2. Check Election Eligibility in India

### Requirements for Election:
1. Age: >= 25
2. Nationality: Indian
3. Qualification: Graduation

### Program
```c
#include <stdio.h>
#include <conio.h>

void main() {
    int age;
    char nat, grad;

    clrscr();

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your nationality:\n i - for Indian\n o - for Other\n");
    scanf(" %c", &nat);

    printf("Enter your qualification:\n g - for Graduation\n p - for 12 Pass\n");
    scanf(" %c", &grad);

    if (age >= 25 && nat == 'i' && grad == 'g') {
        printf("Welcome to the Indian election system.\nYou are eligible for election.\n");
    } else {
        printf("Sorry, you are not eligible. Please try when you meet the election criteria!\n");
    }

    getch();
}
```

---

## 3. Print Numbers

### Program: Print 1 to 10 Using While Loop
```c
#include <stdio.h>
#include <conio.h>

void main() {
    int a = 1;

    while (a <= 10) {
        printf("%d\n", a);
        a++;
    }

    getch();
}
```

### Program: Print 1 to 10 Using For Loop
```c
#include <stdio.h>
#include <conio.h>

void main() {
    int a;

    for (a = 1; a <= 10; a++) {
        printf("%d\n", a);
    }

    getch();
}
```

### Program: Print 1 to 10 Using Do-While Loop
```c
#include <stdio.h>
#include <conio.h>

void main() {
    int a = 1;

    do {
        printf("%d\n", a);
        a++;
    } while (a <= 10);

    getch();
}
```

### Program: Print 1 to N Using While Loop
```c
#include <stdio.h>
#include <conio.h>

void main() {
    int a = 1, n;

    printf("Enter value of n: ");
    scanf("%d", &n);

    while (a <= n) {
        printf("%d\t", a);
        a++;
    }

    getch();
}
```

### Program: Print 1 to N Using For Loop
```c
#include <stdio.h>
#include <conio.h>

void main() {
    int a, n;

    printf("Enter value of n: ");
    scanf("%d", &n);

    for (a = 1; a <= n; a++) {
        printf("%d\t", a);
    }

    getch();
}
```

### Program: Print 1 to N Using Do-While Loop
```c
#include <stdio.h>
#include <conio.h>

void main() {
    int a = 1, n;

    printf("Enter value of n: ");
    scanf("%d", &n);

    do {
        printf("%d\t", a);
        a++;
    } while (a <= n);

    getch();
}
```

---

## 4. Print Even Numbers from 1 to N

### Program
```c
#include <stdio.h>

void main() {
    int i = 1, n;

    printf("Enter a number: ");
    scanf("%d", &n);

    while (i <= n) {
        if (i % 2 == 0) {
            printf("%d\t", i);
        }
        i++;
    }
}
```

---

## 5. Print Sum of Numbers from 1 to N

### Program
```c
#include <stdio.h>
#include <conio.h>

void main() {
    int i = 1, n, sum = 0;

    clrscr();

    printf("Enter your number: ");
    scanf("%d", &n);

    while (i <= n) {
        sum += i;
        i++;
    }

    printf("Sum of numbers from 1 to %d is: %d\n", n, sum);

    getch();
}
```

---

## 6. Print Sum of Even Numbers from 1 to N

### Program
```c
#include <stdio.h>

void main() {
    int i = 2, n, sum = 0;

    printf("Enter your number: ");
    scanf("%d", &n);

    while (i <= n) {
        sum += i;
        printf("%d\t", i);
        i += 2;
    }

    printf("\nSum of the even numbers from 1 to %d is: %d\n", n, sum);
}
```
