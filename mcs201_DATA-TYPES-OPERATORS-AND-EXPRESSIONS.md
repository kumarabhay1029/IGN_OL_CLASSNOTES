# 📘 UNIT-2: DATA TYPES, OPERATORS AND EXPRESSIONS

## 🔹 What are Data Types?
Data types specify the type of data a variable can hold. They help the compiler or interpreter understand how the data should be stored and what operations can be performed on it.

---

## 🔸 Basic Data Types

| Data Type             | Memory  | Range                  |
|-----------------------|---------|------------------------|
| `int` (Integer)       | 2 Bytes | –32,768 to 32,767      |
| `char` (Character)    | 1 Byte  | –128 to 127            |
| `float` (Floating Pt) | 4 Bytes | 3.4e–38 to 3.4e+38      |
| `double`              | 8 Bytes | 1.7e–308 to 1.7e+308    |

---

## 🔸 Data Type Qualifiers

| Data Type        | Size (Bytes) | Range                          |
|------------------|--------------|--------------------------------|
| `short int` / `int` | 2          | -32,768 to 32,767              |
| `long int`          | 4          | -2,147,483,648 to 2,147,483,647|
| `signed int`        | 2          | -32,768 to 32,767              |
| `unsigned int`      | 2          | 0 to 65,535                    |
| `signed char`       | 1          | -128 to 127                    |
| `unsigned char`     | 1          | 0 to 255                       |

---

## 🔸 Variables

**Definition:**  
A variable is an identifier that stores data for future use.

**Example:**
```c
int a;  // "a" is a variable of type int, takes 2 bytes
a = 5;  // value 5 is assigned to "a"
```

---

## 🔸 Declaring & Initializing Variables

- **Declaration Only:**
  ```c
  int a;
  ```
- **Initialization at Declaration:**
  ```c
  int a = 10;
  ```
- **Assignment After Declaration:**
  ```c
  a = 5;
  ```

---

## 🔸 Constants

Constants follow strict formatting rules. Types include:

### 🔹 Integer Constants

Valid: `1`, `443`, `32767`  
Invalid:
- `12.45` → float
- `1 245` → spaces not allowed
- `0785` → cannot start with 0 (octal issue)

### 🔹 Octal Integer Constants

- **Range**: Base 8 → `0` to `7`
- **Valid**: `0`, `01`, `0747`
- **Invalid**: `743`, `0438`, `0.777.77`

### 🔹 Hexadecimal Integer Constants

- **Valid**: `0x0`, `0XF77`, `0xABCD`
- **Invalid**: `0BEF`, `0x.4bff`, `0XGBC`

---

### 🔹 Floating Point Constants

Format: `[sign] mantissa × 10^[exponent]`

Example:
```c
+12.34 // float because of decimal
```

---

### 🔹 Character Constants

- Single character enclosed in single quotes:
  ```c
  char ch = 'a';
  ```

#### Escape Sequences:
| Escape | Meaning     |
|--------|-------------|
| `\n`   | New line    |
| `\t`   | Tab         |
| `\a`   | Alarm       |
| `\\`   | Backslash   |

---

### 🔹 String Constants

- A **string** is a sequence of characters in double quotes.
  ```c
  char name[20] = "Brijesh";
  ```

---

## 🔸 Symbolic Constants

Defined using `#define` outside `main()`.

```c
#define MAX 100
#define PI 3.141592
#define TRUE 1
#define FALSE 0
```

---

## 🔸 Expressions & Operators

**Example:**
```c
z = a + b;
```
- `a`, `b`, `z` → operands  
- `+` → operator  
- `=` → assignment operator  

---

## 🔸 Arithmetic Operators

| Operator | Meaning           |
|----------|-------------------|
| `+`      | Addition           |
| `-`      | Subtraction        |
| `*`      | Multiplication     |
| `/`      | Division (quotient)|
| `%`      | Modulus (remainder)|

---

## 🔸 Increment Operators

- **Post-increment**: `a++` → use then increment  
- **Pre-increment**: `++a` → increment then use

**Example:**
```c
int a = 2, b = 3;
int c = ++a - b--;
```

---

## 🔸 Relational Operators

| Operator | Meaning                       |
|----------|-------------------------------|
| `==`     | Equal to                      |
| `!=`     | Not equal to                  |
| `<`      | Less than                     |
| `<=`     | Less than or equal to         |
| `>`      | Greater than                  |
| `>=`     | Greater than or equal to      |

---

## 🔸 Logical Operators

| Operator | Meaning     |
|----------|-------------|
| `&&`     | Logical AND |
| `||`     | Logical OR  |
| `!`      | Logical NOT |

---

## 🔸 Conditional & Comma Operators

### Conditional (`?:`):
```c
(condition) ? (value_if_true) : (value_if_false);
```

**Example:**
```c
x = (y < 20) ? 9 : 10;
```

```c
printf("%s", grade >= 50 ? "passed" : "failed");
```

### Comma Operator:
Evaluates multiple expressions:
```c
x = (y - 2, y - 1);  // x gets value of last expression
```

---

## 🔸 Type Cast Operator

Used to convert one data type into another.

```c
float f = 3.5;
int a = (int)f; // f is typecast to int
```

---

## 🔸 `sizeof` Operator

Returns the size (in bytes) of a data type or variable.

```c
sizeof(int);  // 2 bytes
```

---

## 🔸 C Shorthand Operators

| Operator | Example  | Meaning        |
|----------|----------|----------------|
| `+=`     | `a += 2` | `a = a + 2`    |
| `-=`     | `a -= 2` | `a = a - 2`    |
| `*=`     | `a *= 2` | `a = a * 2`    |
| `/=`     | `a /= 2` | `a = a / 2`    |
| `%=`     | `a %= 2` | `a = a % 2`    |
| `&&=`    | `a &&= b`| `a = a && b`   |

---

## 🔸 Operator Precedence and Associativity

| Precedence | Operators                        | Associativity  |
|------------|----------------------------------|----------------|
| Highest    | `()` `++` `--` `(type)` `sizeof` | Left to Right  |
|            | `*` `/` `%`                      | Left to Right  |
|            | `+` `-`                          | Left to Right  |
|            | `<` `<=` `>` `>=`                | Left to Right  |
|            | `==` `!=`                        | Left to Right  |
|            | `&&`                             | Left to Right  |
|            | `||`                             | Left to Right  |
|            | `?:`                             | Right to Left  |
| Lowest     | `=`, `+=`, `-=`, `*=`, `/=`, `%=`| Right to Left  |

---

## ✅ Summary

- Understand different data types, their size, and range.
- Learn variable declaration and assignment.
- Use constants and symbolic constants properly.
- Master arithmetic, relational, logical, and shorthand operators.
- Understand operator precedence and associativity for correct evaluation of expressions.

---

🟦 *End of UNIT-2*
