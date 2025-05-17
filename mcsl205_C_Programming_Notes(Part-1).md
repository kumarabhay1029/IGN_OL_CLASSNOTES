# MCSL-205 Section - 1 (C Programming)  

## Table of Contents

1. [Introduction](#introduction)
2. [Basic Program Structure](#basic-program-structure)
3. [Important Components](#important-components)
    - [Header Files](#1-header-files)
    - [Keywords and Functions](#2-keywords-and-functions)
4. [Example: Simple Output Program](#example-simple-output-program)
    - [Multiple Print Statements](#multiple-print-statements)
5. [Using `return 0` Instead of `getch()`](#using-return-0-instead-of-getch)
6. [Data Types and Format Specifiers](#data-types-and-format-specifiers)
7. [Program: Add Two Numbers](#program-add-two-numbers)
8. [Program: Add Two Numbers with User Input](#program-add-two-numbers-with-user-input)
9. [Program: Area and Circumference of a Circle](#program-area-and-circumference-of-a-circle)
10. [Note on Compilers](#note-on-compilers)
11. [HOMEWORK](#homework)
12. [Conditional Statements](#conditional-statements)
    - [If-Else: Greater of Two Numbers](#1-if-else-greater-of-two-numbers)
    - [Else-If: Greater of Three Numbers](#2-else-if-greater-of-three-numbers)
    - [Leap Year Checker](#3-leap-year-checker)
    - [BTECH Eligibility Check](#4-btech-eligibility-check)
    - [Compare Age of Two Students](#5-compare-age-of-two-students)
13. [LAB CONTINUES...](#lab-continues)
14. [HOMEWORK](#homework-1)

---

## Introduction

1. **Preferred Compiler:** Use **BORLAND C/C++** as per syllabus; **TURBO C/C++** is also acceptable.
2. **What is Programming?** Understand what programming is and why it is necessary.
3. **Programming Grammar:** Every language has its own grammar (rules and syntax).
4. **Syntax:** Each program must follow the proper syntax.

---

## Basic Program Structure

Typical C program structure:

```c
#include <header_file>
void main() {
   // body of program
}
```

- `main()` is the starting point of program execution.
- A **function** is a set of instructions that produces a result.
- In mathematics, `f(x)` denotes a function with argument x.

---

## Important Components

### 1. Header Files

Header files provide access to library functions required to compile and run programs.

- **Common Header Files:**
  - `#include <stdio.h>` – Standard Input/Output (required in almost every program)
  - `#include <conio.h>` – Console Input/Output
  - `#include <stdlib.h>` – General utilities
  - `#include <math.h>` – Mathematical operations
  - `#include <string.h>` – String operations

These files help the compiler link to the appropriate libraries.

### 2. Keywords and Functions

Frequently used functions:

- `printf();` – Print output to the screen
- `scanf();` – Read input from the user
- `getch();` – Wait for a key press
- `clrscr();` – Clear the screen

---

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
- `\n` is used to move the output to a new line.

---

## Using `return 0` Instead of `getch()`

```c
#include <stdio.h>
#include <conio.h>

int main() {
    printf("Hello Friends");
    return 0;
}
```
- When using `int main()`, always return an integer (`return 0;`).
- `getch()` is used to hold the output window open in BORLAND/TURBO C.

---

## Data Types and Format Specifiers

| Data Type | Keyword | Format Specifier | Size    |
|-----------|---------|------------------|---------|
| Integer   | int     | `%d`             | 2 bytes |
| Character | char    | `%c`             | 1 byte  |
| Float     | float   | `%f`             | 4 bytes |

---

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

---

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

---

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

---

## Note on Compilers

- Different compilers (G++, Code::Blocks, etc.) may have different behaviors.
- For learning and basic C/C++ programs, **Turbo C++** or **Borland C++** is recommended.

---

## HOMEWORK

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

---

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

---

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

---

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

---

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

---

## HOMEWORK

- Practice writing normal `if-else` programs.
- For each program above, write an algorithm before coding.

---
