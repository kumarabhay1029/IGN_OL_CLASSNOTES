# MCSL-205 Section - 1 (C Programming)

## Introduction

1. We use either **TURBO C/C++** or **BORLAND C/C++**, but as per the syllabus, **BORLAND C/C++** is preferred.
2. Before learning programming, we must understand **what programming is** and **why it is required**.
3. Every programming language has its **grammar**, meaning rules and regulations that must be followed.
4. Every program has **syntax** that must be followed.

## Basic Program Structure

To write a program in C, we use the following syntax:

```c
#include <header_file>
void main() {
   // body of program
}
```

- `main()` is the main function.
- A **function** is a set of instructions that executes to produce a result.
- In math, `f(x)` is a function of x.

## Important Components

### 1. Header Files
Header files are libraries required to compile and run programs.

- **Common header files**:
  - `#include <stdio.h>` – Standard Input/Output (used in every program)
  - `#include <conio.h>` – Console Input/Output
  - `#include <stdlib.h>` – General utilities
  - `#include <math.h>` – Math functions
  - `#include <string.h>` – String operations

These help link the right compiler and translator.

### 2. Keywords and Functions

Important functions:

- `printf();` – Output text
- `scanf();` – Input values
- `getch();` – Waits for user input
- `clrscr();` – Clears screen

## Example: Simple Output Program

```c
#include <stdio.h>
#include <conio.h>

void main() {
    printf("Hello Friends");
    getch();
}
```

### Multiple Print Statements

```c
#include <stdio.h>
#include <conio.h>

void main() {
    printf("Hello Friends\n");
    printf("Hello Friends\n");
    printf("Hello Friends\n");
    printf("Hello Friends\n");
    printf("Hello Friends\n");
    getch();
}
```

- `\n` is used to print on a new line.

## Using `return 0` Instead of `getch()`

```c
#include <stdio.h>
#include <conio.h>

int main() {
    printf("Hello Friends");
    return 0;
}
```

- If using `int main()`, you must return an integer (`return 0;`).
- `getch()` is used to hold the output window in BORLAND/TURBO C.

## Data Types and Format Specifiers

| Data Type | Keyword | Format Specifier | Size          |
|-----------|---------|------------------|---------------|
| Integer   | int     | `%d`              | 2 bytes       |
| Character | char    | `%c`              | 1 byte        |
| Float     | float   | `%f`              | 4 bytes       |

## Program: Add Two Numbers

```c
#include <stdio.h>
#include <conio.h>

void main() {
    int a = 4, b = 6, c;
    c = a + b;
    printf("Sum = %d\n", c);
    printf("Sum of %d and %d = %d", a, b, c);
    getch();
}
```

## Program: Add Two Numbers with User Input

```c
#include <stdio.h>
#include <conio.h>

void main() {
    int a, b, c;
    printf("Enter first number: ");
    scanf("%d", &a);
    
    printf("Enter second number: ");
    scanf("%d", &b);
    
    c = a + b;
    printf("Sum = %d\n", c);
    printf("Sum of %d and %d = %d", a, b, c);
    getch();
}
```

## Program: Area and Circumference of a Circle

```c
#include <stdio.h>
#include <conio.h>
#define PI 3.14

void main() {
    int r;
    float area, cir;

    printf("Enter the radius: ");
    scanf("%d", &r);

    area = PI * r * r;
    cir = 2 * PI * r;

    printf("Area = %f\n", area);
    printf("Circumference = %f", cir);
    getch();
}
```

## Note on Compilers

Different compilers (e.g., G++, Code::Blocks) may behave differently. For best results in C/C++, use **Turbo C++** or **Borland C++**, especially for learning and basic programs.

---

## **HOMEWORK**

1. Write a program to find the **area and perimeter of a rectangle**.
2. Write a program to **calculate the sum and average of three numbers**.

---

## Conditional Statements

### 1. If-Else: Greater of Two Numbers

```c
void main() {
    int a = 6, b = 8;
    if(a > b) {
        printf("a is greater");
    } else {
        printf("b is greater");
    }
}
```

### 2. Else-If: Greater of Three Numbers

```c
void main() {
    int a = 6, b = 7, c = 8;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);

    if(a > b && a > c) {
        printf("a is greater");
    } else if(b > c) {
        printf("b is greater");
    } else {
        printf("c is greater");
    }
}
```

### 3. Leap Year Checker

```c
void main() {
    int year;
    printf("Enter year: ");
    scanf("%d", &year);

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        printf("This is a leap year");
    } else {
        printf("This is not a leap year");
    }
}
```

### 4. BTECH Eligibility Check

```c
void main() {
    int qual, marks;

    printf("Enter your qualification (class): ");
    scanf("%d", &qual);

    printf("Enter your 12th marks: ");
    scanf("%d", &marks);

    if(qual >= 12 && marks > 75) {
        printf("You are eligible for BTECH\n");
    } else {
        printf("You are not eligible, try next year");
    }

    getch();
}
```

### 5. Compare Age of Two Students

```c
void main() {
    int age1, age2;

    printf("Enter age of first student: ");
    scanf("%d", &age1);

    printf("Enter age of second student: ");
    scanf("%d", &age2);

    if(age1 > age2) {
        printf("The first student is older.");
    } else {
        printf("The second student is older.");
    }

    getch();
}
```

---

## LAB CONTINUES...

## **HOMEWORK**

- Learn and practice normal `if-else` programs.
- Develop an algorithm for each program covered above.
```
