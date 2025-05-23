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

    | Data    | # of 1s | Parity Bit | Parity Data    |
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

    | Data    | # of 1s | Parity Bit | Parity Data    |
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

#### Step 2: Arrangement

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

![Hamming for more than 4 bits](https://drive.google.com/uc?export=view&id=1FQzxkbvaWvLkmmGNcc6aH68MY1yYi0e0)

---

#### Step 4: Error Detection (Syndrome Calculation)

- Compare parity bits of received data with calculated parity bits to get a **syndrome word**.
- The syndrome (in binary) gives the error position.
- Flip the bit at that position to correct the error.

**Example:**

- Source Data: `101001000110`
- Received Data: `100011000100`
- Syndrome: `1010` (binary) = 10 (decimal) ⟶ Error at position 10
- Corrected Data: `101001000110` → Original Data: `10101001`

![Hamming correction](https://drive.google.com/uc?export=view&id=1VeP_WsEmZbgP61ATrf0zpRTSDrYKEKfy)
![Syndrome illustration](https://drive.google.com/uc?export=view&id=1E9_wjqnW2taHQIUE2Yqv8cvGZlyKl517)

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
