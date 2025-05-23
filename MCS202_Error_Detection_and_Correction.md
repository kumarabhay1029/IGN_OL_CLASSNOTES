# 🛡️ MCS202: Error Detection & Correction (Parity & Hamming Code)

## Table of Contents
1. [What is an Error?](#what-is-an-error)
2. [Error Detection](#error-detection)
3. [Parity Bits](#parity-bits)
    - [Even Parity Bit](#even-parity-bit)
    - [Odd Parity Bit](#odd-parity-bit)
4. [Hamming Code: Error Detection & Correction](#hamming-code-error-detection--correction)
    - [Hamming Code for 4 Bits (Venn Diagram)](#hamming-code-for-4-bits-venn-diagram)
    - [Hamming Code for More than 4 Bits](#hamming-code-for-more-than-4-bits)
5. [References & Images](#references--images)
6. [Quick Revision Table](#quick-revision-table)

---

## What is an Error?

> **Error** in data transmission means that the received data is different from the transmitted data due to some unwanted changes (bit flips).

- **Example:**  
  - Transmitted: `101` → Received: `100`  
  - Transmitted: `5`   → Received: `4`  
- **Error** = Change in the original value during transmission.

---

## Error Detection

Error detection is the process of finding whether an error has occurred during data transmission.

- **Example:**  
  If the rightmost bit in `101` changes from 1 to 0 (i.e., becomes `100`), we can detect and possibly correct this error.

- **Analogy:**  
  In real life, we use guards for protection. Similarly, in data transmission, we use **parity bits** as guard bits to protect data from errors.

---

## Parity Bits

A **parity bit** is an extra bit added to data to help detect (and sometimes correct) errors during transmission.

### Types of Parity Bits:
1. **Even Parity Bit (EP)**
2. **Odd Parity Bit (OP)**

Both work as guard bits for data.

---

### Even Parity Bit

- **Steps to Calculate:**
    1. Count the number of 1s in the data.
    2. If the count is even, parity bit = 0.
    3. If the count is odd, parity bit = 1 (to make the total even).

- **Examples:**

    | Data    | # of 1s | Parity Bit | Parity Data   |
    |---------|---------|------------|---------------|
    | 101011  |   4     |     0      | 0 101011      |
    | 111011  |   5     |     1      | 1 111011      |

---

### Odd Parity Bit

- **Steps to Calculate:**
    1. Count the number of 1s in the data.
    2. If the count is odd, parity bit = 0.
    3. If the count is even, parity bit = 1 (to make the total odd).

- **Examples:**

    | Data    | # of 1s | Parity Bit | Parity Data   |
    |---------|---------|------------|---------------|
    | 101010  |   3     |     0      | 0 101010      |
    | 111010  |   4     |     1      | 1 111010      |

---

## Hamming Code: Error Detection & Correction

Hamming code is a method for **detecting and correcting single-bit errors** in binary data, using multiple parity bits placed at specific positions.

---

### Hamming Code for 4 Bits (Venn Diagram)

- For a 4-bit data, arrange the bits using Venn diagram (3 circles, each circle for a parity bit).
- Each parity bit checks a specific combination of data bits.

- **Example:**  
  - Source Data: `1010`  
  - Received Data: `1011`  
  - Check which parity bits (circles) are violated to find the error location.

**Visualization:**

![Hamming error bit checking](https://drive.google.com/uc?export=view&id=1G_TcSpjDK015QYrdLQCSxz6FMC1rtEWU)

- The intersection (highlighted area) shows the error bit.
- After correcting, the data becomes `1010`.

**Exercise Example:**

- Source: `0110`  
- Received: `1110`  
- Error detected and corrected to `0110`.

![Exercise](https://drive.google.com/uc?export=view&id=1e6NV7vXNfqNarz7fxsuOsFIUhjW_E5_o)

---

### Hamming Code for More than 4 Bits

#### Step 1: Find Number of Parity Bits Needed

If data length = N, find smallest `i` such that:  
`2^i ≥ N + i + 1`

- Example: For N = 8,
    - Try i = 4: 2⁴ = 16 ≥ 8 + 4 + 1 = 13 ✔️  
    - So, 4 parity bits are needed.

![Hamming for more than 4 bits](https://drive.google.com/uc?export=view&id=1FQzxkbvaWvLkmmGNcc6aH68MY1yYi0e0)


#### Step 2: Arrangement
- For source data
- Total length = N + i (data + parity bits)
- Parity bits are placed at positions that are powers of 2 (1, 2, 4, 8, ...)

**Bit positions (example for 8 data bits + 4 parity bits = 12 bits):**

| Bit Position | 12 | 11 | 10 | 9  | 8  | 7 | 6 | 5 | 4  | 3 | 2 | 1 |
|--------------|----|----|----|----|----|---|---|---|----|---|---|---|
| Bit Value    | 1  | 0  | 1  | 0  | P4 | 1 | 0 | 0 | P3 | 1 | P2|P1 |

- `Pn` = Parity bit at position n

**Bitmap Table:**

| Position  | 8 | 4 | 2 | 1 |
|-----------|---|---|---|---|
| 1         | - | - | - | 1 |
| 2         | - | - | 1 | - |
| 3         | - | - | 1 | 1 |
| 4         | - | 1 | - | - |
| 5         | - | 1 | - | 1 |
| 6         | - | 1 | 1 | - |
| 7         | - | 1 | 1 | 1 |
| 8         | 1 | - | - | - |
| 9         | 1 | - | - | 1 |
| 10        | 1 | - | 1 | - |
| 11        | 1 | - | 1 | 1 |
| 12        | 1 | 1 | - | - |

#### Step 3: Calculate Parity Bits

- For each parity bit, take even parity of all bits it covers.

**Example Calculation:**

- `pt1` = even parity of positions (3, 5, 7, 9, 11)
- `pt2` = even parity of positions (3, 6, 7, 10, 11)
- `pt3` = even parity of positions (5, 6, 7, 12)
- `pt4` = even parity of positions (9, 10, 11, 12)

**Final Hamming Encoded Data Example:**  
`101001000110`

![Hamming correction](https://drive.google.com/uc?export=view&id=1VeP_WsEmZbgP61ATrf0zpRTSDrYKEKfy)

##### Step 4: Received Data Analysis
- For Received data.
- The received data is analyzed to detect and correct errors using Hamming code. Below is the received data and how parity bits are calculated.

---

 **Received Data Layout**

| Position | 12 | 11 | 10 | 9  | 8   | 7  | 6  | 5  | 4   | 3  | 2  | 1  |
|----------|----|----|----|----|-----|----|----|----|-----|----|----|----|
| Bit      | 1  | 0  | 0  | 0  | pt4 | 1  | 0  | 0  | pt3 | 1  | pt2 | pt1|

---

**Bitmap Table**

| Position | 8   | 4   | 2   | 1   |
|----------|-----|-----|-----|-----|
| 1        | -   | -   | -   | 1   |
| 2        | -   | -   | 1   | -   |
| 3        | -   | -   | 1   | 1   |
| 4        | -   | 1   | -   | -   |
| 5        | -   | 1   | -   | 1   |
| 6        | -   | 1   | 1   | -   |
| 7        | -   | 1   | 1   | 1   |
| 8        | 1   | -   | -   | -   |
| 9        | 1   | -   | -   | 1   |
| 10       | 1   | -   | 1   | -   |
| 11       | 1   | -   | 1   | 1   |
| 12       | 1   | 1   | -   | -   |

---

#### Step 5: **Parity Bit Calculations**

The values of parity bits (pt1, pt2, pt3, pt4) are calculated using **even parity (EP)** for specific bit positions:

1. **pt1**: Covers positions 1, 3, 5, 7, 9, 11  
   ```
   pt1 = EP(3rd, 5th, 7th, 9th, 11th)
       = EP(1, 0, 1, 0, 0)
       = 0
   ```

2. **pt2**: Covers positions 2, 3, 6, 7, 10, 11  
   ```
   pt2 = EP(3rd, 6th, 7th, 10th, 11th)
       = EP(1, 0, 1, 0, 0)
       = 0
   ```

3. **pt3**: Covers positions 4, 5, 6, 7, 12  
   ```
   pt3 = EP(5th, 6th, 7th, 12th)
       = EP(0, 0, 1, 1)
       = 0
   ```

4. **pt4**: Covers positions 8, 9, 10, 11, 12  
   ```
   pt4 = EP(9th, 10th, 11th, 12th)
       = EP(0, 0, 0, 1)
       = 1
   ```

---

## **Final Receiver Data**

The final received data with parity bits is:  
**100011000100**

#### **Source Data for Comparison**  
The original source data is:  
**101001000110**

---

## **Error Detection(Syndrome Calculation)**

### **Step 1: Comparing Parity Bits**
- **Parity Bits of Source Data:** `0010`  
- **Parity Bits of Received Data:** `1000`  
- **Syndrome Word:**  
  ```
  Syndrome = Source Parity XOR Received Parity
           = 0010 XOR 1000
           = 1010
  ```

### **Step 2: Error Detection**
- The syndrome word `1010` (binary) corresponds to position **10** in decimal.  
- This indicates an error at the **10th bit** of the received data.

---

## **Error Correction**

### **Step 1: Flip the Error Bit**
- Correct the error by flipping the bit at position 10 in the received data:
  ```
  Received Data: 100011000100
  Corrected Data: 101001000110
  ```

### **Step 2: Extract Corrected Data**
- The **corrected receiver data** (without parity bits) is:  
  **10101001**


  **Example:**

- Source Data: `101001000110`
- Received Data: `100011000100`
- Syndrome: `1010` (binary) = 10 (decimal) ⟶ Error at position 10
- Corrected Data: `101001000110` → Original Data: `10101001`

---

## **Diagram for Reference**

![Syndrom](https://drive.google.com/uc?export=view&id=1E9_wjqnW2taHQIUE2Yqv8cvGZlyKl517)

---

### **Summary of the Process**
1. Arrange received data with parity bits.
2. Calculate parity bits using even parity for specific positions.
3. Compare source and received parity bits to form the syndrome word.
4. Decode the syndrome to locate the error position.
5. Correct the error by flipping the bit at the identified position.
6. Extract the corrected data.

The process ensures detection and correction of a **single-bit error** in the received data.](https://chat.whatsapp.com/LqaemPIHBhHHQLg8qPfeeD)

---

## References & Images

- [Hamming error bit checking](https://drive.google.com/uc?export=view&id=1G_TcSpjDK015QYrdLQCSxz6FMC1rtEWU)
- [Venn diagram exercise](https://drive.google.com/uc?export=view&id=1e6NV7vXNfqNarz7fxsuOsFIUhjW_E5_o)
- [Hamming for >4 bits](https://drive.google.com/uc?export=view&id=1FQzxkbvaWvLkmmGNcc6aH68MY1yYi0e0)
- [Parity & syndrome illustration](https://drive.google.com/uc?export=view&id=1VeP_WsEmZbgP61ATrf0zpRTSDrYKEKfy)
- [Syndrome example](https://drive.google.com/uc?export=view&id=1E9_wjqnW2taHQIUE2Yqv8cvGZlyKl517)

---

## Quick Revision Table

| Term         | Meaning / Use                                  |
|--------------|------------------------------------------------|
| Error        | Change in data during transmission             |
| Parity Bit   | Extra bit for error detection                  |
| Even Parity  | Makes total number of 1s even                  |
| Odd Parity   | Makes total number of 1s odd                   |
| Hamming Code | Detects & corrects single-bit errors           |
| Syndrome     | Output word that locates error position        |
| Venn Diagram | Visualizes parity bit coverage (small data)    |

---

✨ **Tip:** For exams, remember:  
- Steps for calculating parity bits  
- How to use syndrome for error correction  
- Powers of 2 for parity bit positions in Hamming code

---
