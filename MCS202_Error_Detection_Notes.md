# MCS202: Error Detection and Correction Notes 📚

## Table of Contents

1. [Introduction to Errors](#introduction-to-errors)
2. [Parity Bits: The Safety Guard 🛡️](#parity-bits-the-safety-guard-️)
    - [Types of Parity Bits](#types-of-parity-bits)
        - [Even Parity Bit](#1-even-parity-bit)
        - [Odd Parity Bit](#2-odd-parity-bit)
3. [Hamming Error Detection and Correction](#hamming-error-detection-and-correction)
    - [4-Bit Data Example](#4-bit-data-example)
    - [Exercise on 4-Bit Data](#exercise-on-4-bit-data)
4. [For Data Larger Than 4 Bits](#for-data-larger-than-4-bits)
    - [Finding Parity Bits for Larger Data](#finding-parity-bits-for-larger-data)
    - [Syndrome Calculation](#syndrome-calculation)
5. [Revision Table](#revision-table)
6. [Conclusion](#conclusion)

---

## Introduction to Errors

- **What is an error?**  
  An error occurs when data transmitted is misinterpreted or altered.  
  For example:  
  ```
  101 ---> 100  
  5 ---> 4  
  ```
  This change in data is called an **error**.  

---

## Parity Bits: The Safety Guard 🛡️

In real life, we use guards for protection. Similarly, in data transmission, we use **parity bits** as a safety mechanism to **nullify the chances of errors**.

### Types of Parity Bits

1. **Even Parity Bit (EP)**  
2. **Odd Parity Bit (OP)**  

These parity bits act as guards to ensure that data integrity is maintained.

---

### 1. Even Parity Bit

- **Definition:** Ensures the total number of `1s` in the data (including the parity bit) is even.  
- **Steps to Calculate Even Parity Bit:**
    1. Count the number of `1s` in the data.
    2. If the count is already even, the parity bit is `0`.
    3. If the count is odd, add `1` to make it even.

**Example:**  
Data: `101011`  
- Step 1: Number of `1s` = 4 (even).  
- Step 2: Parity bit = `0`.  

**Example 2:**  
Data: `111011`  
- Step 1: Number of `1s` = 5 (odd).  
- Step 2: Parity bit = `1`.  

| EP | Data    |
|----|---------|
| 0  | 101011  |
| 1  | 111011  |

---

### 2. Odd Parity Bit

- **Definition:** Ensures the total number of `1s` in the data (including the parity bit) is odd.  
- **Steps to Calculate Odd Parity Bit:**
    1. Count the number of `1s` in the data.
    2. If the count is already odd, the parity bit is `0`.
    3. If the count is even, add `1` to make it odd.

**Example:**  
Data: `101010`  
- Step 1: Number of `1s` = 3 (odd).  
- Step 2: Parity bit = `0`.  

**Example 2:**  
Data: `111010`  
- Step 1: Number of `1s` = 4 (even).  
- Step 2: Parity bit = `1`.  

---

## Hamming Error Detection and Correction

Hamming code is a technique used for both **error detection** and **correction** in binary data transmission.

---

### 4-Bit Data Example

**Source Data:** `1010`  
**Received Data:** `1011`  

1. Arrange the data into a **Venn Diagram** format with **parity bits** protecting specific sections.  
2. Count the `1s` in each circle and determine parity (even/odd).  
3. Highlight the **error bit** in the received data.

➡️ **Correct Data**: `1010`  

**Visualization:**  
![Hamming Error Bit Checking](https://drive.google.com/uc?export=view&id=1G_TcSpjDK015QYrdLQCSxz6FMC1rtEWU)

---

### Exercise on 4-Bit Data

**Source Data:** `0110`  
**Received Data:** `1110`  

1. Use the same Venn Diagram method.  
2. Identify the error bit.  
3. Highlight the error bit and correct the data.  

➡️ **Correct Data:** `0110`  

**Visualization:**  
![Exercise](https://drive.google.com/uc?export=view&id=1e6NV7vXNfqNarz7fxsuOsFIUhjW_E5_o)

---

## For Data Larger Than 4 Bits

When data length exceeds 4 bits, we calculate the **number of parity bits (i)** required using the formula:  
```
2^i - 1 >= N + i  
```
Where `N` = number of data bits, `i` = number of parity bits.

**Example:**  
**Source Data:** `10101001`  
**Received Data:** `10001001`  
- Step 1: Calculate `i` using the formula.  
  ```
  i = 4 (satisfies the condition)
  ```
- Step 2: Total length = N + i = 8 + 4 = 12.  

### Parity Bit Placement

Arrange the parity bits (`pt1`, `pt2`, `pt3`, `pt4`) at positions:  
`2^1, 2^2, 2^3, 2^4`  

| Bit Position | 12  | 11  | 10  | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   |
|--------------|------|------|------|------|------|------|------|------|------|------|------|
| Data Bits    | 1    | 0    | 1    | 0    | pt4 | 1    | 0    | 0    | pt3 | 1    | pt2 | pt1 |

**Final Source Data with Parity Bits:** `101001000110`  

**Visualization:**  
![Parity Bit Visualization](https://drive.google.com/uc?export=view&id=1FQzxkbvaWvLkmmGNcc6aH68MY1yYi0e0)

---

## Syndrome Calculation

**Syndrome Word:** Used to detect error positions in received data.  

**Example:**  
**Source Data:** `101001000110`  
**Received Data:** `100011000100`  

1. Calculate parity bits for both source and received data.
2. Compare parity bits to form the **syndrome word**.  
3. Convert syndrome to decimal to find the error position.  

| Source Parity Bits | 0  | 0  | 1  | 0  |
|---------------------|----|----|----|----|
| Receiver Parity Bits | 1  | 0  | 0  | 0  |
| **Syndrome Word**    | 1  | 0  | 1  | 0  |

➡️ **Error Position:** Decimal value of `1010` = **10th bit**.  

**Corrected Data:** `101001000110`  
**Visualization:**  
![Syndrome Calculation](https://drive.google.com/uc?export=view&id=1E9_wjqnW2taHQIUE2Yqv8cvGZlyKl517)

---

## Revision Table

| Topic                      | Key Points                                                                 |
|----------------------------|---------------------------------------------------------------------------|
| **Errors**                 | Errors alter transmitted data (e.g., `101` → `100`).                     |
| **Parity Bits**            | Safety guards to nullify errors; types: Even (EP) & Odd (OP).            |
| **Hamming Code (4 Bits)**  | Error detection and correction using Venn diagrams and parity bits.      |
| **Larger Data Handling**   | Calculate parity bits (`2^i - 1 >= N + i`) for data > 4 bits.            |
| **Syndrome Calculation**   | Detect and correct errors by comparing parity bits of source and receiver.|

---

## Conclusion

Parity bits and Hamming codes are robust methods for error detection and correction in data transmission. Understanding their application ensures data integrity in real-world systems.

- Use **even/odd parity bits** as a safety mechanism.  
- Apply **Hamming codes** for error detection and single-bit error correction.  
- Calculate **syndrome words** to detect and fix errors efficiently.  

--- 