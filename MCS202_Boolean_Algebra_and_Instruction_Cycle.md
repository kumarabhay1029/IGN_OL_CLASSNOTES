# 📝 MCS202: Instruction Cycle & Boolean Algebra – Revision Notes

# 📚 Table of Contents – MCS202: Instruction Cycle & Boolean Algebra

1. [Instruction Cycle](#1️⃣-instruction-cycle)
    - [What is Instruction Cycle?](#what-is-instruction-cycle)
    - [Representing via Sequences](#representing-via-sequences)
    - [Definition of Instruction Cycle](#definition-of-instruction-cycle)
    - [Phases of Instruction Cycle](#phases-of-instruction-cycle)
    - [Flowchart Representation](#flowchart-representation)

2. [Boolean Algebra](#2️⃣-boolean-algebra)
    - [Boolean Variable](#boolean-variable)
    - [Truth Table](#new-concept-truth-table)
        - [One Variable](#1-taking-one-variable)
        - [Two Variables](#2-taking-two-variables)
        - [Three Variables](#3-taking-three-variables)
        - [Four Variables](#4-taking-four-variables)

3. [Boolean Operations](#3️⃣-boolean-operations)
    - [Basic Operations](#basic-operations)
        - [AND Operation](#1-and-operation)
        - [OR Operation](#2-or-operation)
        - [NOT Operation](#3-not-operation)
    - [Non Basic Operations](#non-basic-operations)
        - [NAND Operation](#1-nand-operation)
        - [NOR Operation](#2-nor-operation)
        - [Exclusive XOR](#exclusive-xor)

4. [Properties](#4️⃣-properties)

5. [Gates](#5️⃣-gates)
    - [AND Gate](#1-and-gate)
    - [OR Gate](#2-or-gate)
    - [NOT Gate](#3-not-gate)

6. [Boolean Expression](#6️⃣-boolean-expression)
    - [SOP Form (Sum of Product)](#sop-form-sum-of-product)
    - [POS Form (Product of Sum)](#pos-form-product-of-sum)

---

## 1️⃣ Instruction Cycle

### What is Instruction Cycle?
It is a set of phases from the creation of instructions up to its termination throughout the execution.

![Opcode and Operand](https://drive.google.com/uc?export=view&id=1e3cowrbL94HFLVIBoo25zL7_OSUHwACG)


#### Representing via Sequences
Cycle means sequential steps.  
For example: life cycle of a person.

#### Definition of INSTRUCTION cycle
It is a set of activity or phases that starts from creation of instruction, to the termination will perform that become instruction cycle.

#### Phases of Instruction Cycle

1. **Calculate address of the instruction**
2. **Fetch the instruction**
3. **Decode the Opcodes**
    - *Explanation of phase 3:*  
      Instruction = add R1, R2.  
      R1 & R2 are operands and Add is opcode.
      - Operation code - coded form of the operation.
      - Operands - it can be data value or register name. These two are names of memory location where data need to fetch for operation.
      - *Computer doesn't understand 'add', so computer decodes the operation.*
4. **Calculate the address of operands**
5. **Fetch the operands**
6. **Perform the operation**
7. **Calculate the address to store the result operand**
8. **Store the result**

![Instruction Cycle](https://drive.google.com/uc?export=view&id=1BhITgyekM87CuI2QxKPW93kbQgungw5Y)

---

### Flowchart Representation

*Representing Instruction cycle via Flowchart.*  
Make a flowchart basis of instruction cycle which is given below or see image.

![Flowchart of Phases](https://drive.google.com/uc?export=view&id=1M7SZYbEqEMVArqNevW4OOIElW9-CHvuL)

---

## 2️⃣ Boolean Algebra

Algebra based on two symbols – 0, 1

- 0 → False
- 1 → True

---

### Boolean Variable

A boolean variable may take value 0 (sometimes) or 1 (sometimes true or false).

Let x is Boolean variable then it will store a value 0 or 1.

---

### New Concept: Truth Table

#### 1. Taking one variable

x → 0, 1

If number of variable increases then total combination will be 2ⁿ, where 2 indicates number of symbols and n indicates number of variables.

- Total number of combinations = 2ⁿ
- 2 raised to the power 1 = 2

| x | Decimal Equivalent |
|---|-------------------|
| 0 |        0          |
| 1 |        1          |

- 0 → False
- 1 → True

| x | F | T |
|---|---|---|
| 0 | ✔ |   |
| 1 |   | ✔ |

![Truth Table Introduction](https://drive.google.com/uc?export=view&id=14JeQ6Kt1ev0RWk858cXfC0kkeu_Wx6ws)

---

#### 2. Taking two variables

If x and y then total number of combination = 2ⁿ = 2² = 4

| Decimal eq | x | y |
|------------|---|---|
|     0      | 0 | 0 |
|     1      | 0 | 1 |
|     2      | 1 | 0 |
|     3      | 1 | 1 |

- 2² = 4; 4/2 = 2 for x's possibility, 2/2 = 1 for y's possibility.

![Truth Table for 2 Variables](https://drive.google.com/uc?export=view&id=1Zin_E-5UxNk1HHQwhIvlNbLNZ70cD_uu)

---

#### 3. Taking three variables

| Decimal eq | x | y | z |
|------------|---|---|---|
|     0      | 0 | 0 | 0 |
|     1      | 0 | 0 | 1 |
|     2      | 0 | 1 | 0 |
|     3      | 0 | 1 | 1 |
|     4      | 1 | 0 | 0 |
|     5      | 1 | 0 | 1 |
|     6      | 1 | 1 | 0 |
|     7      | 1 | 1 | 1 |

- 2³ = 8; 8/2 = 4 for x's possibility, 4/2 = 2 for y's possibility, 2/1 = 1 for z's possibility.

![Truth Table for 3 Variables](https://drive.google.com/uc?export=view&id=12-WgHEWLuc1bYZ8iD1xDoJ-KzsGqxXFQ)


---

#### 4. Taking four variables

| Decimal eq | x | y | z | w |
|------------|---|---|---|---|
|     0      | 0 | 0 | 0 | 0 |
|     1      | 0 | 0 | 0 | 1 |
|     2      | 0 | 0 | 1 | 0 |
|     3      | 0 | 0 | 1 | 1 |
|     4      | 0 | 1 | 0 | 0 |
|     5      | 0 | 1 | 0 | 1 |
|     6      | 0 | 1 | 1 | 0 |
|     7      | 0 | 1 | 1 | 1 |
|     8      | 1 | 0 | 0 | 0 |
|     9      | 1 | 0 | 0 | 1 |
|    10      | 1 | 0 | 1 | 0 |
|    11      | 1 | 0 | 1 | 1 |
|    12      | 1 | 1 | 0 | 0 |
|    13      | 1 | 1 | 0 | 1 |
|    14      | 1 | 1 | 1 | 0 |
|    15      | 1 | 1 | 1 | 1 |

- 2⁴ = 16; 16/2 = 8 for x's possibility, 8/2 = 4 for y's possibility, 4/2 = 2 for z's possibility, 2/2 = 1 for w's possibility.

![Truth Table for 4 Variables](https://drive.google.com/uc?export=view&id=1jhtk4ZJCMrQ5GvNXA4FAKM86UYlAOEY9)

---

## 3️⃣ Boolean Operations

### Basic Operations

#### 1. AND Operation

- Representation:
  - A AND B
  - A.B
  - A ∧ B
  - (A, B are operands)

- Shortcut trick:
  - Output → Minimum value (compare in A.B)

| A | B | A.B |
|---|---|-----|
| 0 | 0 |  0  |
| 0 | 1 |  0  |
| 1 | 0 |  0  |
| 1 | 1 |  1  |

![Shortcut Trick for AND](https://drive.google.com/uc?export=view&id=1DC9OXulLFTJIc0XTrivCyvrelUCD2Dyz)

---

#### 2. OR Operation

- Representation:
  - A OR B
  - A + B
  - A ∨ B

- Shortcut trick:
  - Output → Maximum value

| A | B | A+B |
|---|---|-----|
| 0 | 0 |  0  |
| 0 | 1 |  1  |
| 1 | 0 |  1  |
| 1 | 1 |  1  |

![Trick for OR](https://drive.google.com/uc?export=view&id=16ovAOHz5AzkubMX5fR5fwlLsn-pd19a7)

---

#### 3. NOT Operation

- Representation:
  - NOT A
  - Ᾱ
  - ~A
  - 7A

- Output: Complement value

| x | Ᾱ |
|---|---|
| 0 | 1 |
| 1 | 0 |

![NOT Operation](https://drive.google.com/uc?export=view&id=1FxKWVjQzCpomnQxZqLjQu8ipvlh8HHXK)

---

### Non Basic Operations

Non-basic operations are made of basic operations.

#### 1. NAND Operation

- Combination of NOT operation + AND operation
- *Process: Find AND operation and perform NOT Operation on AND operation.*

- Representation:
  - A NAND B
  - A.B (bar at top)
  - 7(A ∧ B)

| A | B | A.B | A.B (bar) |
|---|---|-----|-----------|
| 0 | 0 |  0  |     1     |
| 0 | 1 |  0  |     1     |
| 1 | 0 |  0  |     1     |
| 1 | 1 |  1  |     0     |

![NAND Operation](https://drive.google.com/uc?export=view&id=1cegEEZatIuSw2JPnxu3Cjs31xoSs5yEk)

---

#### 2. NOR Operation

- Representation:
  - A NOR B
  - A + B (bar at top)
  - 7(A v B)

| A | B | A+B | A+B (bar) |
|---|---|-----|-----------|
| 0 | 0 |  0  |     1     |
| 0 | 1 |  1  |     0     |
| 1 | 0 |  1  |     0     |
| 1 | 1 |  1  |     0     |

![NOR Operation](https://drive.google.com/uc?export=view&id=1J1J1eF1fsMznX8x02KxYReW46QLtgHbK)

---

#### 3. Type of OR Operation: Inclusive OR & Exclusive XOR

- **Inclusive OR** (Default OR)
- **Exclusive XOR**

**Exclusive XOR**

- Representation:
  - A XOR B
  - A +(circle around +) B
  - A (upside down triangle) B

| A | B | A XOR B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

---

## 4️⃣ Properties

1. **Commutative Law**
   - A.B = B.A
   - A+B = B+A

2. **Associative Law**
   - (A+B) + C = A + (B+C)
   - (A.B).C = A.(B.C)

3. **Distributive Law**
   - A.(B+C) = A.B + A.C
   - A + (B.C) = (A+B).(A+C)

4. **De Morgan's Law**
   - (A+B) (bar at top) = A(bar).B(bar)
   - (A.B) (bar at top) = A(bar) + B(bar)

5. **Double Complement Law**
   - (A (bar bar)) = A

6. **Identity Laws**
   - A.0 = 0
   - A.1 = A
   - A + 1 = 1
   - A.A = A
   - A + A = A

---

## 5️⃣ Gates

### What are gates?
Diagrammatically representation of boolean operation.

### Basic Gates

1. **AND Gate**
2. **OR Gate**
3. **NOT Gate**

---

#### 1. AND Gate

Representation:

```
      _____
A ---|     \
     |      |------ A.B
B ---|_____/
```

---

#### 2. OR Gate

Representation:

```
A ──\
         )─── A + B
B ──/
```

---

#### 3. NOT Gate

Representation:

```
A ───|⊝>── A(bar)
```

---

## 6️⃣ Boolean Expression

### SOP Form (Sum of Product)

### POS Form (Product of Sum)

| SOP form                | POS form                         |
|-------------------------|----------------------------------|
| F = A.B + A(bar).B      | F = (A+B).(A(bar)+B(bar))        |
| (sum of product)        | (product of sum)                 |

---

> **Note:**  
> All tables, diagrams, and explanations are preserved as per your original handwritten notes, now organized in a clear, professional, and easy-to-revise format.  
> Emojis are used for section clarity and engagement.

---
