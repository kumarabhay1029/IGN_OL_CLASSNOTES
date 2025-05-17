# MCS 205: Programming Fundamentals (C/C++)  
## Revision Notes

---

## Table of Contents

1. [Voting Eligibility Program in India](#voting-eligibility-program-in-india)
2. [Election Eligibility Program](#election-eligibility-program)
3. [Printing Numbers: 1 to 10](#printing-numbers-1-to-10)
4. [Printing Numbers: 1 to n](#printing-numbers-1-to-n)
5. [Printing Even Numbers from 1 to n](#printing-even-numbers-from-1-to-n)
6. [Sum of Numbers from 1 to n](#sum-of-numbers-from-1-to-n)
7. [Sum of Even Numbers from 1 to n](#sum-of-even-numbers-from-1-to-n)

---

## Voting Eligibility Program in India

A candidate is eligible to vote in India if:
- Nationality is Indian
- Age is 18 or above

### Simple If-Else Version

```c
#include <stdio.h>
#include <conio.h>

void main() {
    char nat;
    int age;
    clrscr();

    printf("Enter your nationality:\n i-for Indian \n o-for Other: ");
    scanf("%c", &nat);

    printf("Enter your age: ");
    scanf("%d", &age);

    if (nat == 'i' && age >= 18) {
        printf("Welcome to the Indian election system");
    } else {
        printf("You are not eligible!");
    }
    getch();
}
```

### Nested If Version

```c
#include <stdio.h>
#include <conio.h>

void main() {
    char nat;
    int age;
    clrscr();

    printf("Enter your nationality:\n i-for Indian \n o-for Other: ");
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

## Election Eligibility Program

A candidate is eligible for election in India if:
- Age is 25 or above
- Nationality is Indian
- Qualification: Graduation

```c
#include <stdio.h>
#include <conio.h>

void main() {
    int age;
    char nat, grad;

    clrscr();

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your nationality\n i-for Indian\n o-for Other: ");
    scanf(" %c", &nat);

    printf("Enter your qualification:\n g-for Graduation \n p-for 12 Pass: ");
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

## Printing Numbers: 1 to 10

### Using While Loop

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

### Using For Loop

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

### Using Do-While Loop

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

---

## Printing Numbers: 1 to n

### Using While Loop

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

### Using For Loop

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

### Using Do-While Loop

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

## Printing Even Numbers from 1 to n

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

## Sum of Numbers from 1 to n

```c
#include <stdio.h>
#include <conio.h>

void main() {
    int i = 1, n, sum = 0;
    clrscr();

    printf("Enter your number: ");
    scanf("%d", &n);

    while (i <= n) {
        sum = sum + i;
        i++;
    }

    printf("Sum of numbers from 1 to %d is: %d\n", n, sum);
    getch();
}
```

---

## Sum of Even Numbers from 1 to n

```c
#include <stdio.h>

void main() {
    int i = 2, n, sum = 0;
    printf("Enter your number: ");
    scanf("%d", &n);

    while (i <= n) {
        sum = sum + i;
        printf("%d\t", i);
        i += 2;
    }
    printf("\nSum of the even numbers from 1 to %d is: %d\n", n, sum);
}
```

---

**End of Notes**
