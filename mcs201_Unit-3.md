### UNIT - 3: Decision and Loop Control Statements

---

## ✅ Decision Control Statements

### 1. `if-else` Statement

**Explanation:**
Conditional statements allow the program to make decisions and execute code blocks based on given conditions.

**Ternary Form:**

```c
x = (y < 20) ? 9 : 10;
```

This means: If `y` is less than 20, assign `9` to `x`; otherwise, assign `10`.

**Standard Syntax:**

```c
if (condition) {
    // code block if condition is true
} else {
    // code block if condition is false
}
```

**Example - Check Even or Odd:**

```c
if (a % 2 == 0) {
    printf("Even");
} else {
    printf("Odd");
}
```

---

### 2. `switch` Statement

**Used when we have multiple conditions based on a single variable.**

**Syntax:**

```c
switch (a) {
    case 1:
        // statement;
        break;
    case 2:
        // statement;
        break;
    // ... other cases ...
    default:
        // statement if no case matches;
        break;
}
```

**Example:**

```c
int choice = 2;
switch (choice) {
    case 1:
        printf("One");
        break;
    case 2:
        printf("Two");
        break;
    case 3:
        printf("Three");
        break;
    default:
        printf("Wrong choice");
        break;
}
```

---

## 🔁 Loop Control Statements

**Definition:**
A loop allows a set of instructions to be executed repeatedly until a specific condition is met.

### 1. `while` Loop

```c
while (condition) {
    // code block
    // increment or decrement
}
```

### 2. `do-while` Loop

```c
do {
    // code block
    // increment or decrement
} while (condition);
```

### 3. `for` Loop

```c
for (initialization; condition; increment/decrement) {
    // code block
}
```

---

## 🧮 Print Numbers 1 to 10

### Using `while` loop:

```c
int a = 1;
while (a <= 10) {
    printf("%d ", a);
    a++;
}
```

### Using `do-while` loop:

```c
int a = 1;
do {
    printf("%d ", a);
    a++;
} while (a <= 10);
```

### Using `for` loop:

```c
for (int a = 1; a <= 10; a++) {
    printf("%d ", a);
}
```

---

## 🧩 Nested `if` Statements

**Syntax:**

```c
if (condition1) {
    if (condition2) {
        // statement
    } else {
        // else block of inner if
    }
} else {
    // else block of outer if
}
```

**Example - Student B.Tech Eligibility Check:**

```c
int q;  // qualification (class passed)
float m;  // marks

if (q >= 12 && m >= 75) {
    printf("WELCOME");
} else {
    printf("Unqualified!");
}
```

**Detailed Feedback:**

```c
int q;
float m;

if (q >= 12) {
    if (m >= 75) {
        printf("You are qualified.");
    } else {
        printf("Your marks are too low.");
    }
} else {
    printf("You are underqualified.");
}
```

