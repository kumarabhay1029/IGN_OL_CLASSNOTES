# Complement and Binary Arithmetic Notes

## Objective
These notes are designed to provide a comprehensive understanding of complements in different number systems, binary arithmetic operations, and representations of numbers in signed magnitude and complement forms. It also includes exercises for better conceptual clarity.

---

## Table of Contents
1. **Understanding Complement in Number Systems**
   - Definition of Complement
   - Types of Complements
2. **Decimal Number System: 9's and 10's Complements**
   - Steps to Calculate 9's and 10's Complements
   - Example and Exercise
3. **Binary System: 1's and 2's Complements**
   - Steps to Calculate 1's and 2's Complements
   - Shortcut for Finding 2's Complement
   - Example and Exercise
4. **Arithmetic Operations on Binary Numbers**
   - Addition and Subtraction of Binary Numbers
   - Example and Exercise
5. **Fixed Point and Floating Point Numbers**
   - Floating Point Numbers
   - Fixed Point Numbers
6. **Signed Magnitude Representation**
   - Representation Rules
   - Examples with 8-bit Registers
   - Addition and Subtraction using Signed Magnitude
7. **Signed 1's Complement Representation**
   - Representation Rules
   - Examples and Exercises
8. **Signed 2's Complement Representation**
   - Representation Rules
   - Examples and Exercises

---

## 1. Understanding Complement in Number Systems

### Definition of Complement
The complement of a set or value refers to the exclusion of elements or digits from the domain or range. For example:
- Let \( A = \{x : x \text{ belongs to } W\} \), where \( W \) is the set of whole numbers.
- The complement \( A' \) includes all values except whole numbers, represented as \( A' = R - W = Z \), where \( Z \) is the set of negative integers.

### Types of Complements
1. \( (r-1)'s \) Complement
2. \( r's \) Complement

For base \( r \):
- Base 2: 1's and 2's Complements
- Base 10: 9's and 10's Complements
- Base 8: 7's and 8's Complements
- Base 16: 15's and 16's Complements

---

## 2. Decimal Number System: 9's and 10's Complements

### Steps to Calculate
1. Identify the total number of digits in the given number.
2. Subtract the given number from the largest number with the same number of digits (e.g., 9999 for 4 digits).
3. Add 1 to the result to find the \( 10's \) Complement.

### Example
Find the \( 9's \) and \( 10's \) Complement of \( 7852 \):
1. Largest 4-digit number: \( 9999 \)
2. \( 9999 - 7852 = 2147 \) (9's Complement)
3. \( 2147 + 1 = 2148 \) (10's Complement)

---

## 3. Binary System: 1's and 2's Complements

### Steps to Calculate
1. Find the largest binary number with the same number of digits.
2. Subtract the given binary number from this largest number to find the \( 1's \) Complement.
3. Add 1 to the \( 1's \) Complement to find the \( 2's \) Complement.

### Shortcut for Finding 2's Complement
- Start from the rightmost digit and move left until you find the first \( 1 \).
- Copy this \( 1 \) and invert all bits to the left of it.

### Example
Find the \( 1's \) and \( 2's \) Complement of \( 1011001 \):
1. Largest binary number: \( 1111111 \)
2. \( 1111111 - 1011001 = 0100110 \) (1's Complement)
3. \( 0100110 + 1 = 0100111 \) (2's Complement)

---

## 4. Arithmetic Operations on Binary Numbers

### Binary Addition Example
```
  101010
+ 110011
---------
  011101
```

### Binary Subtraction Example
```
  1001001
- 0111111
---------
  0001010
```

---

## 5. Fixed Point and Floating Point Numbers

### Floating Point Numbers
- Example: \( 0.00123 \times 10^{-10} \) = \( 0.123 \times 10^{-12} \)
- **Exponent**: Power of 10 (\( -12 \))
- **Mantissa**: \( 0.123 \)

### Fixed Point Numbers
- Represented using:
  1. Signed Magnitude
  2. Signed 1's Complement
  3. Signed 2's Complement

---

## 6. Signed Magnitude Representation

### Rules
- Use the Most Significant Bit (MSB) for the sign: \( 0 \) for positive, \( 1 \) for negative.
- Remaining bits represent the magnitude.

### Example (8-bit Register)
- \( +5 \): \( 00000101 \)
- \( -5 \): \( 10000101 \)

### Addition/Subtraction Rules
1. Same sign: Add magnitudes; keep the sign.
2. Different signs: Subtract magnitudes; keep the sign of the larger number.

---

## 7. Signed 1's Complement Representation

### Rules
- Positive numbers remain unchanged.
- Negative numbers are represented using their \( 1's \) Complement.

### Example (8-bit Register)
- \( +5 \): \( 00000101 \)
- \( -5 \): \( 11111010 \) (1's Complement)

---

## 8. Signed 2's Complement Representation

### Rules
- Positive numbers remain unchanged.
- Negative numbers are represented using their \( 2's \) Complement.

### Example
- \( +5 \): \( 00000101 \)
- \( -5 \): \( 11111011 \) (2's Complement)

### Exercise
Perform \( -25 + 10 \):
1. \( -25 \) in \( 2's \) Complement: \( 11100111 \)
2. \( +10 \): \( 00001010 \)
3. Result: \( 11110110 \) (\( -15 \) in Decimal)

---

## Exercises
### Decimal System
1. Find the \( 9's \) and \( 10's \) Complement of \( 4321 \).

### Binary System
1. Find the \( 1's \) and \( 2's \) Complement of \( 1101010 \).

### Arithmetic Operations
1. Perform \( 101110 + 011011 \).
2. Perform \( 1001001 - 0111111 \).

### Signed Representations
1. Represent \( +7 \) and \( -7 \) in Signed Magnitude, 1's Complement, and 2's Complement using an 8-bit register.
